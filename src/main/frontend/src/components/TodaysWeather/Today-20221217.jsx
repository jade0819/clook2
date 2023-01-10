import React from "react";
import { useLocationContext } from "../../contexts/LocationContext";
import Section from "../Shared/Section/Section";
import Skeleton from "../Shared/UI/Skeleton";
import Card from "../Shared/Card/Card";
import Chart from "./Chart";
import useWeather from "../../hooks/useWeather";
import * as sort from "../../util/sort";

export default function Today() {
  const { location } = useLocationContext();

  // const queryResults = useWeather(["today"], location, "");
  // const { isLoading, isSuccess, data: today } = queryResults[0];
  // console.log(queryResults[0].data?.length);

  // Fake Data
  const isLoading = false;
  const isSuccess = true;
  // const today = [
  //   {
  //     sky: "1",
  //     t1h: 0,
  //     pty: "0",
  //     tmp: "-2",
  //     icon: "해",
  //     fcstDate: "20221211",
  //     ftime: 800,
  //   },
  //   {
  //     pop: "30",
  //     sky: "1",
  //     t1h: 0,
  //     pty: "0",
  //     tmp: "0",
  //     icon: "해",
  //     fcstDate: "20221211",
  //     ftime: 900,
  //   },
  //   {
  //     sky: "1",
  //     t1h: 0,
  //     pty: "0",
  //     tmp: "1",
  //     icon: "해",
  //     fcstDate: "20221211",
  //     ftime: 1000,
  //   },
  //   {
  //     sky: "1",
  //     t1h: 0,
  //     pty: "0",
  //     tmp: "3",
  //     icon: "해",
  //     fcstDate: "20221211",
  //     ftime: 1100,
  //   },
  //   {
  //     sky: "1",
  //     t1h: 0,
  //     pty: "0",
  //     tmp: "4",
  //     icon: "해",
  //     fcstDate: "20221211",
  //     ftime: 1200,
  //   },
  //   {
  //     sky: "1",
  //     t1h: 0,
  //     pty: "0",
  //     tmp: "5",
  //     icon: "해",
  //     fcstDate: "20221211",
  //     ftime: 1300,
  //   },
  //   {
  //     sky: "1",
  //     t1h: 0,
  //     pty: "0",
  //     tmp: "6",
  //     icon: "해",
  //     fcstDate: "20221211",
  //     ftime: 1400,
  //   },
  //   {
  //     sky: "1",
  //     t1h: 0,
  //     pty: "0",
  //     tmp: "6",
  //     icon: "해",
  //     fcstDate: "20221211",
  //     ftime: 1500,
  //   },
  //   {
  //     sky: "1",
  //     t1h: 0,
  //     pty: "0",
  //     tmp: "6",
  //     icon: "해",
  //     fcstDate: "20221211",
  //     ftime: 1600,
  //   },
  //   {
  //     sky: "1",
  //     t1h: 0,
  //     pty: "0",
  //     tmp: "4",
  //     icon: "해",
  //     fcstDate: "20221211",
  //     ftime: 1700,
  //   },
  //   {
  //     sky: "1",
  //     t1h: 0,
  //     pty: "0",
  //     tmp: "3",
  //     icon: "달",
  //     fcstDate: "20221211",
  //     ftime: 1800,
  //   },
  //   {
  //     sky: "1",
  //     t1h: 0,
  //     pty: "0",
  //     tmp: "2",
  //     icon: "달",
  //     fcstDate: "20221211",
  //     ftime: 1900,
  //   },
  //   {
  //     sky: "1",
  //     t1h: 0,
  //     pty: "0",
  //     tmp: "2",
  //     icon: "달",
  //     fcstDate: "20221211",
  //     ftime: 2000,
  //   },
  //   {
  //     sky: "1",
  //     t1h: 0,
  //     pty: "0",
  //     tmp: "1",
  //     icon: "달",
  //     fcstDate: "20221211",
  //     ftime: 2100,
  //   },
  //   {
  //     sky: "1",
  //     t1h: 0,
  //     pty: "0",
  //     tmp: "0",
  //     icon: "달",
  //     fcstDate: "20221211",
  //     ftime: 2200,
  //   },
  //   {
  //     sky: "1",
  //     t1h: 0,
  //     pty: "0",
  //     tmp: "0",
  //     icon: "달",
  //     fcstDate: "20221211",
  //     ftime: 2300,
  //   },
  //   {
  //     sky: "1",
  //     t1h: 0,
  //     pty: "0",
  //     tmp: "0",
  //     icon: "달",
  //     fcstDate: "20221212",
  //     ftime: 0,
  //   },
  //   {
  //     sky: "1",
  //     t1h: 0,
  //     pty: "0",
  //     tmp: "-1",
  //     icon: "달",
  //     fcstDate: "20221212",
  //     ftime: 100,
  //   },
  //   {
  //     sky: "3",
  //     t1h: 0,
  //     pty: "0",
  //     tmp: "-1",
  //     icon: "달구름",
  //     fcstDate: "20221212",
  //     ftime: 200,
  //   },
  //   {
  //     sky: "4",
  //     t1h: 0,
  //     pty: "0",
  //     tmp: "-1",
  //     icon: "구름",
  //     fcstDate: "20221212",
  //     ftime: 300,
  //   },
  //   {
  //     sky: "3",
  //     t1h: 0,
  //     pty: "0",
  //     tmp: "0",
  //     icon: "달구름",
  //     fcstDate: "20221212",
  //     ftime: 400,
  //   },
  //   {
  //     sky: "3",
  //     t1h: 0,
  //     pty: "0",
  //     tmp: "-1",
  //     icon: "달구름",
  //     fcstDate: "20221212",
  //     ftime: 500,
  //   },
  //   {
  //     sky: "4",
  //     t1h: 0,
  //     pty: "0",
  //     tmp: "-1",
  //     icon: "구름",
  //     fcstDate: "20221212",
  //     ftime: 600,
  //   },
  //   {
  //     sky: "3",
  //     t1h: 0,
  //     pty: "0",
  //     tmp: "-1",
  //     icon: "달구름",
  //     fcstDate: "20221212",
  //     ftime: 700,
  //   },
  // ];

  const today = [
    {
      sky: "1",
      t1h: 0,
      pty: "0",
      tmp: "18",
      icon: "달",
      fcstDate: "20221212",
      ftime: 0,
    },
    {
      sky: "1",
      t1h: 0,
      pty: "0",
      tmp: "20",
      icon: "달",
      fcstDate: "20221212",
      ftime: 100,
    },
    {
      sky: "3",
      t1h: 0,
      pty: "0",
      tmp: "21",
      icon: "달구름",
      fcstDate: "20221212",
      ftime: 200,
    },
    {
      sky: "4",
      t1h: 0,
      pty: "0",
      tmp: "22",
      icon: "구름",
      fcstDate: "20221212",
      ftime: 300,
    },
    {
      sky: "3",
      t1h: 0,
      pty: "0",
      tmp: "21",
      icon: "달구름",
      fcstDate: "20221212",
      ftime: 400,
    },
    {
      sky: "3",
      t1h: 0,
      pty: "0",
      tmp: "23",
      icon: "달구름",
      fcstDate: "20221212",
      ftime: 500,
    },
    {
      sky: "4",
      t1h: 0,
      pty: "0",
      tmp: "24",
      icon: "구름",
      fcstDate: "20221212",
      ftime: 600,
    },
    {
      sky: "3",
      t1h: 0,
      pty: "0",
      tmp: "23",
      icon: "달구름",
      fcstDate: "20221212",
      ftime: 700,
    },
    {
      sky: "1",
      t1h: 0,
      pty: "0",
      tmp: "26",
      icon: "해",
      fcstDate: "20221211",
      ftime: 800,
    },
    {
      pop: "30",
      sky: "1",
      t1h: 0,
      pty: "0",
      tmp: "27",
      icon: "해",
      fcstDate: "20221211",
      ftime: 900,
    },
    {
      sky: "1",
      t1h: 0,
      pty: "0",
      tmp: "28",
      icon: "해",
      fcstDate: "20221211",
      ftime: 1000,
    },
    {
      sky: "1",
      t1h: 0,
      pty: "0",
      tmp: "31",
      icon: "해",
      fcstDate: "20221211",
      ftime: 1100,
    },
    {
      sky: "1",
      t1h: 0,
      pty: "0",
      tmp: "34",
      icon: "해",
      fcstDate: "20221211",
      ftime: 1200,
    },
    {
      sky: "1",
      t1h: 0,
      pty: "0",
      tmp: "35",
      icon: "해",
      fcstDate: "20221211",
      ftime: 1300,
    },
    {
      sky: "1",
      t1h: 0,
      pty: "0",
      tmp: "36",
      icon: "해",
      fcstDate: "20221211",
      ftime: 1400,
    },
    {
      sky: "1",
      t1h: 0,
      pty: "0",
      tmp: "36",
      icon: "해",
      fcstDate: "20221211",
      ftime: 1500,
    },
    {
      sky: "1",
      t1h: 0,
      pty: "0",
      tmp: "34",
      icon: "해",
      fcstDate: "20221211",
      ftime: 1600,
    },
    {
      sky: "1",
      t1h: 0,
      pty: "0",
      tmp: "30",
      icon: "해",
      fcstDate: "20221211",
      ftime: 1700,
    },
    {
      sky: "1",
      t1h: 0,
      pty: "0",
      tmp: "28",
      icon: "달",
      fcstDate: "20221211",
      ftime: 1800,
    },
    {
      sky: "1",
      t1h: 0,
      pty: "0",
      tmp: "26",
      icon: "달",
      fcstDate: "20221211",
      ftime: 1900,
    },
    {
      sky: "1",
      t1h: 0,
      pty: "0",
      tmp: "26",
      icon: "달",
      fcstDate: "20221211",
      ftime: 2000,
    },
    {
      sky: "1",
      t1h: 0,
      pty: "0",
      tmp: "22",
      icon: "달",
      fcstDate: "20221211",
      ftime: 2100,
    },
    {
      sky: "1",
      t1h: 0,
      pty: "0",
      tmp: "20",
      icon: "달",
      fcstDate: "20221211",
      ftime: 2200,
    },
    {
      sky: "1",
      t1h: 0,
      pty: "0",
      tmp: "16",
      icon: "달",
      fcstDate: "20221211",
      ftime: 2300,
    },
  ];

  let sortData = today;
  if (today) {
    // 오름차순 정렬
    sortData = sort.objValueSort("asc", today, "ftime");
    // pop key 추가
    sortData.map((item) => {
      if (!item.hasOwnProperty("pop")) {
        item.pop = 0;
      }
      if (item.hasOwnProperty("tmp")) {
        item.tmp = Number(item.tmp);
      }
    });
  }
  // console.log(sortData);

  let chartData = [];
  let popData = [];
  let iconData = [];
  let max = -100;
  let min = 100;
  sortData.map((item, index) => {
    chartData = [
      ...chartData,
      {
        x: item.ftime,
        y: item.tmp,
      },
    ];

    popData.push(item.pop);
    iconData.push(item.icon);

    max = item.tmp < max ? max : item.tmp === max ? max : item.tmp;
    min = item.tmp > min ? min : item.tmp === min ? min : item.tmp;
  });
  // console.log(chartData);
  // console.log(popData);
  // console.log(iconData);
  // console.log(max, min);

  return (
    <Section>
      {isLoading && <Skeleton />}
      {isSuccess && today && (
        <>
          <span className="block text-4xl leading-[150%] font-bold text-black mb-10">
            오늘의 날씨
          </span>
          <Card height="h-[441px]" styles="cursor-default">
            <div className="relative w-full h-[441px]">
              <div className="absolute left-0 top-[26px] flex flex-col justify-center w-full h-[390px] overflow-y-hidden overflow-x-scroll">
                <Chart
                  chartData={chartData}
                  popData={popData}
                  iconData={iconData}
                  max={max}
                  min={min}
                />
              </div>
            </div>
          </Card>
        </>
      )}
    </Section>
  );
}

// Question is how to fill bottom part of a chart? It should fill everything under 0 on y-axis. Area should go all the way to the bottom
