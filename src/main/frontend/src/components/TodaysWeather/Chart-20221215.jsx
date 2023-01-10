import React from "react";
import { ResponsiveLine } from "@nivo/line";
import { chartTimeFormat } from "../../util/timeFormat";
import { getWweatherImages } from "../../util/getWweatherImages";
import Sun from "../../assets/imgs/icon/sun.png";

// Nivo 차트
export default function Chart({ chartData, popData, max, min }) {
  const data = [
    {
      id: "Today Weather",
      data: chartData,
    },
  ];

  const minBottom = min - 5;
  const maxTop = max + 10;

  const CustomPointLabel = (props) => {
    // console.dir(props);
    return `${props.y}˚`;
  };

  const currentTime = 3;
  const CustomSymbol = (props) => {
    // console.dir(props);
    const x = props.datum.x;

    let circle = null;
    if (x / 100 === currentTime) {
      circle = (
        <g>
          <circle
            r={6}
            strokeWidth={3}
            stroke="#1E3A8A"
            fill="white"
            fillOpacity={0.35}
          />
        </g>
      );
    } else {
      circle = (
        <g>
          <circle
            r={6}
            strokeWidth={3}
            stroke="#93C5FD"
            fill="white"
            fillOpacity={0.35}
          />
        </g>
      );
    }

    return circle;
  };

  const CustomTick = (props) => {
    const { value, x, y } = props;

    let idx = -1;
    chartData.map((item, index) => {
      if (item.x === value) {
        idx = index;
      }
    });
    const pop = popData[idx].pop;

    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={-2}
          textAnchor="middle"
          stroke="#1E3A8A"
          fill="#1E3A8A"
          style={{
            fontFamily: "Pretendard",
            fontSize: "20px",
            // fontWeight: "600",
            lineHeight: "150%",
            fontWeight: "300",
          }}
        >
          {chartTimeFormat(value)}
        </text>
        <image
          // xlinkHref={getWweatherImages("icon", data[index].icon)}
          xlinkHref={Sun}
          x={-20}
          y={5}
          textAnchor="middle"
          // height="36px"
          width="40px"
        />
        <text
          x={0}
          y={70}
          textAnchor="middle"
          stroke="#2563EB"
          fill="#2563EB"
          style={{
            fontFamily: "Pretendard",
            fontSize: "20px",
            // fontWeight: "600",
            lineHeight: "150%",
            fontWeight: "300",
          }}
        >
          {pop === 0 ? "" : `${pop}%`}
        </text>
      </g>
    );
  };

  return (
    <div className="w-[1800px] h-[380px]">
      <svg className="absolute">
        <defs>
          <linearGradient id="someGradientId" x1="0" y1="0" x2="0" y2="1">
            <stop offset="50%" stopColor="#BFDBFE" stopOpacity={1} />
            <stop offset="100%" stopColor="#d9d9d9" stopOpacity={0.79} />
          </linearGradient>
        </defs>
      </svg>
      <ResponsiveLine
        width="2200"
        height="380"
        data={data}
        margin={{
          top: 40,
          right: 50,
          bottom: 10,
          left: 50,
        }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
          min: minBottom,
          max: maxTop,
          stacked: true,
          reverse: false,
        }}
        // stacked={true}
        curve="linear"
        axisRight={null}
        axisBottom={null}
        axisTop={{
          orient: "top",
          tickSize: 0,
          tickPadding: 5,
          tickRotation: 0,
          renderTick: CustomTick,
        }}
        axisLeft={null}
        // indexBy="x"
        // 점 위에 값 나오는 것.
        enablePointLabel={true}
        pointLabel={CustomPointLabel}
        pointSize={10}
        pointColor="#00FF00"
        pointBorderWidth={3}
        pointBorderColor="#ff0000"
        // 점 위에 값 y 위치 조정
        pointLabelYOffset={-12}
        pointSymbol={CustomSymbol}
        enableArea={true}
        // 0 라인 바꾸는거
        areaBaselineValue={minBottom}
        areaOpacity={0.3}
        useMesh={false}
        animate={false}
        enableGridX={false}
        enableGridY={false}
        colors={["url(#someGradientId)"]}
      />
    </div>
  );
}
