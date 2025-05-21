import type { Dispatch, SetStateAction } from "react";

type Props = {
  setTime: Dispatch<SetStateAction<"daily" | "weekly" | "monthly">>;
  time: string;
};

export default function UserReport({ time, setTime }: Props) {
  return (
    <section className="desktop:h-[27.625rem] bg-navy-900 desktop:w-fit w-full rounded-[1rem]">
      <div className="desktop:pb-[3rem] desktop:flex-col desktop:items-start desktop:space-y-500 flex items-center space-x-300 rounded-[1rem] bg-purple-600 p-[2rem] text-white">
        <img
          className="h-[4rem] w-[4rem] rounded-full border-4 border-white"
          src="/images/image-jeremy.png"
          alt="Jeremy Robson"
        />
        <div className="space-y-100">
          <p className="textPreset6">Report for</p>
          <h1 className="textPreset4">Jeremy Robson</h1>
        </div>
      </div>
      <div className="desktop:flex-col tablet:justify-evenly textPreset5Regular flex h-fit items-start justify-between gap-[21px] p-[2rem]">
        <button
          onClick={() => {
            setTime("daily");
          }}
          className={`${time == "daily" ? "text-white" : "text-purple-500"} cursor-pointer`}
        >
          Daily
        </button>
        <button
          onClick={() => {
            setTime("weekly");
          }}
          className={`${time == "weekly" ? "text-white" : "text-purple-500"} cursor-pointer`}
        >
          Weekly
        </button>
        <button
          onClick={() => {
            setTime("monthly");
          }}
          className={`${time == "monthly" ? "text-white" : "text-purple-500"} cursor-pointer`}
        >
          Monthly
        </button>
      </div>
    </section>
  );
}
