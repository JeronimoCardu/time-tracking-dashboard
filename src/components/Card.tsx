type Timeframe = "daily" | "weekly" | "monthly";

type Props = {
  userData: {
    title: string;
    timeframes: {
      daily: {
        current: number;
        previous: number;
      };
      weekly: {
        current: number;
        previous: number;
      };
      monthly: {
        current: number;
        previous: number;
      };
    };
  };
  time: Timeframe;
};

export default function Card({ userData, time }: Props) {
  const activity =
    userData.title.toLowerCase() == "self care"
      ? "self-care"
      : userData.title.toLowerCase();
  const color = (activity: string) => {
    if (activity == "work") return "bg-orange";
    if (activity == "play") return "bg-blue";
    if (activity == "study") return "bg-pink";
    if (activity == "exercise") return "bg-green";
    if (activity == "social") return "bg-purple-700";
    if (activity == "self-care") return "bg-yellow";
  };
  return (
    <div
      className={`${color(activity)}  relative z-10 h-fit w-full rounded-[1rem_1rem_2rem_2rem] pt-12`}
    >
      <img
        className="absolute top-0 right-5 z-0"
        src={`/images/icon-${activity}.svg`}
        alt=""
      />
      <div className="bg-navy-900 relative z-15 scale-101 space-y-100 rounded-[1rem] p-[1.5rem]">
        <div className="flex items-center justify-between">
          <p className="textPreset5Medium text-white">{userData.title}</p>
          <img src="/images/icon-ellipsis.svg" alt="" />
        </div>
        <div className="tablet:flex-col tablet:items-start flex items-center justify-between rounded-[1rem]">
          <h1 className="tablet:text-[3.5rem] tablet:leading-[4.125rem] textPreset3 text-white">
            {userData.timeframes[time].current}hrs
          </h1>
          <p className="textPreset6 text-navy-200">
            {time == "daily"
              ? "Yesterday"
              : time == "weekly"
                ? "Last Week"
                : "Last month"}{" "}
            - {userData.timeframes[time].previous}hrs
          </p>
        </div>
      </div>
    </div>
  );
}
