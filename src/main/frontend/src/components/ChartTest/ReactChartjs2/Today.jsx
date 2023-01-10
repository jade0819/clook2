import React from "react";
import Section from "../../Shared/Section/Section";
import LineChart from "./Example/LineChart";

export default function Today() {
  // const { location } = useLocationContext();

  // const queryResults = useWeather(["today"], location, "");
  // const { isLoading, isSuccess, data: today } = queryResults[0];
  // console.log(queryResults[0].data?.length);

  // Fake Data
  const isLoading = false;
  const isSuccess = true;
  const today = [
    {
      sky: "1",
      t1h: 0,
      pty: "0",
      tmp: "-2",
      icon: "해",
      fcstDate: "20221211",
      ftime: 800,
    },
    {
      pop: "30",
      sky: "1",
      t1h: 0,
      pty: "0",
      tmp: "0",
      icon: "해",
      fcstDate: "20221211",
      ftime: 900,
    },
    {
      sky: "1",
      t1h: 0,
      pty: "0",
      tmp: "1",
      icon: "해",
      fcstDate: "20221211",
      ftime: 1000,
    },
    {
      sky: "1",
      t1h: 0,
      pty: "0",
      tmp: "3",
      icon: "해",
      fcstDate: "20221211",
      ftime: 1100,
    },
    {
      sky: "1",
      t1h: 0,
      pty: "0",
      tmp: "4",
      icon: "해",
      fcstDate: "20221211",
      ftime: 1200,
    },
    {
      sky: "1",
      t1h: 0,
      pty: "0",
      tmp: "5",
      icon: "해",
      fcstDate: "20221211",
      ftime: 1300,
    },
    {
      sky: "1",
      t1h: 0,
      pty: "0",
      tmp: "6",
      icon: "해",
      fcstDate: "20221211",
      ftime: 1400,
    },
    {
      sky: "1",
      t1h: 0,
      pty: "0",
      tmp: "6",
      icon: "해",
      fcstDate: "20221211",
      ftime: 1500,
    },
    {
      sky: "1",
      t1h: 0,
      pty: "0",
      tmp: "6",
      icon: "해",
      fcstDate: "20221211",
      ftime: 1600,
    },
    {
      sky: "1",
      t1h: 0,
      pty: "0",
      tmp: "4",
      icon: "해",
      fcstDate: "20221211",
      ftime: 1700,
    },
    {
      sky: "1",
      t1h: 0,
      pty: "0",
      tmp: "3",
      icon: "달",
      fcstDate: "20221211",
      ftime: 1800,
    },
    {
      sky: "1",
      t1h: 0,
      pty: "0",
      tmp: "2",
      icon: "달",
      fcstDate: "20221211",
      ftime: 1900,
    },
    {
      sky: "1",
      t1h: 0,
      pty: "0",
      tmp: "2",
      icon: "달",
      fcstDate: "20221211",
      ftime: 2000,
    },
    {
      sky: "1",
      t1h: 0,
      pty: "0",
      tmp: "1",
      icon: "달",
      fcstDate: "20221211",
      ftime: 2100,
    },
    {
      sky: "1",
      t1h: 0,
      pty: "0",
      tmp: "0",
      icon: "달",
      fcstDate: "20221211",
      ftime: 2200,
    },
    {
      sky: "1",
      t1h: 0,
      pty: "0",
      tmp: "0",
      icon: "달",
      fcstDate: "20221211",
      ftime: 2300,
    },
    {
      sky: "1",
      t1h: 0,
      pty: "0",
      tmp: "0",
      icon: "달",
      fcstDate: "20221212",
      ftime: 0,
    },
    {
      sky: "1",
      t1h: 0,
      pty: "0",
      tmp: "-1",
      icon: "달",
      fcstDate: "20221212",
      ftime: 100,
    },
    {
      sky: "3",
      t1h: 0,
      pty: "0",
      tmp: "-1",
      icon: "달구름",
      fcstDate: "20221212",
      ftime: 200,
    },
    {
      sky: "4",
      t1h: 0,
      pty: "0",
      tmp: "-1",
      icon: "구름",
      fcstDate: "20221212",
      ftime: 300,
    },
    {
      sky: "3",
      t1h: 0,
      pty: "0",
      tmp: "0",
      icon: "달구름",
      fcstDate: "20221212",
      ftime: 400,
    },
    {
      sky: "3",
      t1h: 0,
      pty: "0",
      tmp: "-1",
      icon: "달구름",
      fcstDate: "20221212",
      ftime: 500,
    },
    {
      sky: "4",
      t1h: 0,
      pty: "0",
      tmp: "-1",
      icon: "구름",
      fcstDate: "20221212",
      ftime: 600,
    },
    {
      sky: "3",
      t1h: 0,
      pty: "0",
      tmp: "-1",
      icon: "달구름",
      fcstDate: "20221212",
      ftime: 700,
    },
  ];

  return (
    <Section>
      <>
        <LineChart />
      </>
    </Section>
  );
}
