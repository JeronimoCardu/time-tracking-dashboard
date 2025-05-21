import UserReport from "./components/UserReport";
import data from "../data.json";
import { useState } from "react";
import Card from "./components/Card";

export default function App() {
  const [time, setTime] = useState<"daily" | "weekly" | "monthly">("weekly");
  return (
    <div className="desktop:m-0 desktop:w-6/10 desktop:flex-row desktop:h-full desktop:space-x-300 mx-8 flex flex-col items-center pt-14">
      <UserReport time={time} setTime={setTime} />
      <div className="tablet:grid desktop:m-0 tablet:grid-cols-3 tablet:space-y-0 my-[1.5rem] w-full gap-300 space-y-300">
        {data.map((d) => (
          <Card time={time} userData={d} />
        ))}
      </div>
    </div>
  );
}
