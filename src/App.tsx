import UserReport from "./components/UserReport";
import data from "../data.json";
import { useState } from "react";
import Card from "./components/Card";

export default function App() {
  const [time, setTime] = useState<string>("daily");
  return (
    <div className="mx-8 flex flex-col items-center pt-14">
      <UserReport time={time} setTime={setTime} />
      {data.map((d) => (
        <Card time={time} userData={d} />
      ))}
    </div>
  );
}
