import React from "react";
import { ResponsiveLine } from "@nivo/line";
import Sun from "../../../assets/imgs/icon/sun.png";

// Nivo 차트
export default function LineChart() {
  const data = [
    {
      id: "japan",
      color: "hsl(135, 70%, 50%)",
      data: [
        {
          x: "월",
          y: 15,
        },
        {
          x: "화",
          y: 10,
        },
        {
          x: "수",
          y: 44,
        },
        {
          x: "목",
          y: 24,
        },
        {
          x: "금",
          y: 25,
        },
        {
          x: "토",
          y: 34,
        },
        {
          x: "일",
          y: 21,
        },
      ],
    },
  ];

  const defaultTheme = {
    background: "transparent",
    fontFamily: "sans-serif",
    fontSize: 11,
    textColor: "#333333",
    axis: {
      domain: {
        line: {
          stroke: "transparent",
          strokeWidth: 1,
        },
      },
      ticks: {
        line: {
          stroke: "#777777",
          strokeWidth: 1,
        },
        text: {},
      },
      legend: {
        text: {
          fontSize: 12,
        },
      },
    },
    grid: {
      line: {
        stroke: "#dddddd",
        strokeWidth: 1,
      },
    },
    legends: {
      hidden: {
        symbol: {
          fill: "#333333",
          opacity: 0.6,
        },
        text: {
          fill: "#333333",
          opacity: 0.6,
        },
      },
      text: {},
      ticks: {
        line: {
          stroke: "#777777",
          strokeWidth: 1,
        },
        text: {
          fontSize: 10,
        },
      },
      title: {
        text: {},
      },
    },
    labels: {
      text: {},
    },
    markers: {
      lineColor: "#000000",
      lineStrokeWidth: 1,
      text: {},
    },
    dots: {
      text: {},
    },
    tooltip: {
      container: {
        background: "white",
        color: "inherit",
        fontSize: "inherit",
        borderRadius: "2px",
        boxShadow: "0 1px 2px rgba(0, 0, 0, 0.25)",
        padding: "5px 9px",
        position: "fixed",
        fill: "#ffffff",
        display: "flex",
      },
      basic: {
        whiteSpace: "pre",
        display: "flex",
        alignItems: "center",
      },
      chip: {
        marginRight: 7,
      },
      table: {},
      tableCell: {
        padding: "3px 5px",
      },
      tableCellValue: {
        fontWeight: "bold",
      },
    },
    crosshair: {
      line: {
        stroke: "#000000",
        strokeWidth: 1,
        strokeOpacity: 0.75,
        strokeDasharray: "6 6",
      },
    },
    annotations: {
      text: {
        fontSize: 13,
        outlineWidth: 2,
        outlineColor: "#ffffff",
        outlineOpacity: 1,
      },
      link: {
        stroke: "#000000",
        strokeWidth: 1,
        outlineWidth: 2,
        outlineColor: "#ffffff",
        outlineOpacity: 1,
      },
      outline: {
        fill: "none",
        stroke: "#000000",
        strokeWidth: 2,
        outlineWidth: 2,
        outlineColor: "#ffffff",
        outlineOpacity: 1,
      },
      symbol: {
        fill: "#000000",
        outlineWidth: 2,
        outlineColor: "#ffffff",
        outlineOpacity: 1,
      },
    },
  };

  return (
    <div className="w-full h-[500px]">
      <svg className="absolute">
        <defs>
          <linearGradient id="someGradientId">
            <stop offset="25%" stopColor="#ff0000" />
            <stop offset="100%" stopColor="rgba(124,123,223,0.2)" />
          </linearGradient>
        </defs>
      </svg>

      <ResponsiveLine
        theme={defaultTheme}
        tooltip={() => {
          return;
        }}
        data={data}
        margin={{
          top: 50,
          right: 110,
          bottom: 50,
          left: 60,
        }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
          min: 0,
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        // minY="auto"
        // maxY="auto"
        stacked={true}
        // curve="cardinal"
        curve="linear"
        // yFormat=" >-.2f"
        // xFormat=">-.2f"
        axisTop={{
          orient: "top",
          tickSize: 0,
          tickPadding: 5,
          tickRotation: 0,
          // legend: "transportation",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisRight={null}
        axisBottom={null}
        axisLeft={{
          orient: "left",
          tickSize: 0,
          tickPadding: 5,
          tickRotation: 0,
          // legend: "transportation",
          legendOffset: 36,
          legendPosition: "middle",
          format: (value) => `${value}도`,
        }}
        // axisTop={{
        //   orient: "top",
        //   tickSize: 0,
        //   tickPadding: 5,
        //   tickRotation: 0,
        //   // legend: "transportation",
        //   legendOffset: 36,
        //   legendPosition: "middle",
        // }}
        enablePointLabel={{
          format: function (value) {
            return value + "도";
          },
        }}
        pointSize={20}
        pointColor="#00FF00"
        // dotColor="inherit:darker(0.3)"
        pointBorderWidth={3}
        pointBorderColor="#ff0000"
        // pointBorderColor={{ from: "serieColor" }}
        // enableDotLabel={true}
        pointLabel="y"
        pointLabelYOffset={-12}
        enableArea={true}
        // 0 라인 바꾸는거
        areaBaselineValue={-20}
        areaOpacity={0.3}
        useMesh={true}
        animate={false}
        enableGridX={false}
        enableGridY={false}
        // colors={"linear-gradient(to bottom, #d1f2f3, #3dc8eb)"}
        colors={["url(#someGradientId)"]}
        // motionStiffness={90}
        // motionDamping={15}
        label={function (e) {
          let data = e.value;
          if (data == 0) {
            // return "-";
            return "";
          } else {
            return e.value + "%";
          }
        }} //라벨 출력 형식 + %
        labelTextColor={{
          //라벨 출력 색상
          from: "color",
          modifiers: [["darker", 2]],
        }}
        enableSlices={false}
        // legends={[
        //   {
        //     // anchor: "bottom-right",
        //     // direction: "column",
        //     // justify: false,
        //     // translateX: 100,
        //     // translateY: 0,
        //     // itemsSpacing: 0,
        //     // itemDirection: "left-to-right",
        //     // itemWidth: 80,
        //     // itemHeight: 20,
        //     // itemOpacity: 0.75,
        //     // symbolSize: 12,
        //     // symbolShape: "circle",
        //     // symbolBorderColor: "rgba(0, 0, 0, .5)",
        //     effects: [
        //       {
        //         on: "hover",
        //         style: {
        //           itemBackground: "rgba(0, 0, 0, .03)",
        //           itemOpacity: 1,
        //         },
        //       },
        //     ],
        //   },
        // ]}
      />
    </div>
  );
}
