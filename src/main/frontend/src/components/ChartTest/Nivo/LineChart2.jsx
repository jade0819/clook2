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

  const CustomSymbol = (props) => {
    // console.dir(props);
    const { size, color, borderWidth, borderColor, datum } = props;
    const { x, y } = datum;

    let circle = null;
    if (y === 24) {
      circle = (
        <g>
          <circle
            r={size}
            strokeWidth={borderWidth}
            stroke="blue"
            fill={color}
            fillOpacity={0.35}
          />
        </g>
      );
    } else {
      circle = (
        <g>
          <circle
            r={size}
            strokeWidth={borderWidth}
            stroke={borderColor}
            fill={color}
            fillOpacity={0.35}
          />
        </g>
      );
    }

    return circle;
  };

  return (
    <div className="w-full h-[500px]">
      <svg className="absolute">
        <defs>
          <linearGradient id="someGradientId" x1="0" y1="0" x2="0" y2="1">
            <stop offset="50%" stopColor="#BFDBFE" stopOpacity={1} />
            <stop offset="100%" stopColor="#d9d9d9" stopOpacity={0.79} />
          </linearGradient>
        </defs>
      </svg>

      <ResponsiveLine
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
          min: "auto",
          max: 60,
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
          legendOffset: 36,
          legendPosition: "middle",
          renderTick: ({
            textAnchor,
            textBaseline,
            textX,
            textY,
            value,
            x,
            y,
          }) => {
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
                  {value}
                </text>
                <image
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
                  {`${value}%`}
                </text>
              </g>
            );
          },
        }}
        axisLeft={{
          orient: "left",
          tickSize: 0,
          tickPadding: 5,
          tickRotation: 0,
          legendOffset: 36,
          legendPosition: "middle",
          format: (value) => `${value}도`,
        }}
        indexBy="x"
        // 점 위에 값 나오는 것.
        // enablePointLabel={{
        //   format: (value) => `${value}도`,
        // }}
        enablePointLabel={true}
        pointLabel="y"
        pointSize={10}
        pointColor="#00FF00"
        pointBorderWidth={3}
        pointBorderColor="#ff0000"
        // 점 위에 값 y 위치 조정
        pointLabelYOffset={-12}
        pointSymbol={CustomSymbol}
        enableArea={true}
        // 0 라인 바꾸는거
        areaBaselineValue={10}
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
