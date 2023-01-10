import React from "react";
import Section from "../Shared/Section/Section";
import Chart from "./Chart";

export default function Today() {
  return (
    <Section>
      <h1>오늘의 날씨</h1>
      <Chart />
      {/* <LineChart /> */}
      {/* <div className="w-full h-[700px] p-9 overflow-x-scroll overflow-y-hidden">
        <ReChart />
      </div> */}
      {/* <ReactChartJS2 /> */}
    </Section>
  );
}
