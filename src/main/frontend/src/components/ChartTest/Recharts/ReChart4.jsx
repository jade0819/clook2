import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import Sun from "../../assets/imgs/sun.png";
import { timeFormat } from "../../util/timeFormat";
import jsonData from "./chartData";

const data = jsonData.data;

const time = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23,
];

const CustomizedAxisTick = (props) => {
  const { x, y, payload } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        // x={payload.value > 9 ? 14 : 14}
        x={0}
        y={-2}
        textAnchor="middle"
        stroke="#1E3A8A"
        fill="#1E3A8A"
        style={{ fontSize: "13px", fontWeight: "300" }}
      >
        {timeFormat(payload.value)}
      </text>
      <image
        xlinkHref={Sun}
        x={-20}
        y={0}
        textAnchor="middle"
        height="36px"
        width="36px"
      />
    </g>
  );
};

const currentTime = 1;
const CustomizedDot = (props) => {
  const { cx, cy, index } = props;
  // console.dir(this.props);

  const idx = time.indexOf(currentTime);
  if (index === idx) {
    return (
      <circle
        cx={cx}
        cy={cy}
        r={5}
        stroke="#1E3A8A"
        strokeWidth={2}
        fill="white"
      />
    );
  } else {
    return (
      <circle
        cx={cx}
        cy={cy}
        r={5}
        stroke="#93C5FD"
        strokeWidth={2}
        fill="white"
      />
    );
  }
};

// const CustomizedLabel = (props) => {
//   const { x, y, value } = props;

//   return (
//     <g>
//       <text
//         x={x}
//         y={y}
//         dy={-10}
//         dx={-10}
//         fill="#1E3A8A"
//         style={{ fontSize: "20px" }}
//       >
//         {value}°
//       </text>
//     </g>
//   );
// };

export default class ReChart4 extends PureComponent {
  render() {
    return (
      <div className="relative w-full h-[500px] my-6">
        <div className="absolute left-0 top-0 flex flex-col justify-center w-full h-full overflow-y-hidden overflow-x-scroll">
          <div className="w-auto h-full min-w-[2400px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                height={400}
                data={data}
                margin={{
                  top: 30,
                  right: 30,
                  left: -30,
                  bottom: 0,
                }}
                // style={{ border: "1px solid black" }}
              >
                <defs>
                  <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="30%" stopColor="#BFDBFE" stopOpacity={0.79} />
                    <stop offset="95%" stopColor="#d9d9d9" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis
                  axisLine={false}
                  dataKey="slot"
                  tick={<CustomizedAxisTick />}
                  tickLine={false}
                  orientation="top"
                />
                <YAxis
                  axisLine={false}
                  dataKey="temp"
                  type="number"
                  domain={["dataMin - 5", "dataMax + 10"]}
                  allowDataOverflow={true}
                  tick={false}
                  // tick={true}
                  tickLine={false}
                />
                <Area
                  // type="monotone"
                  dataKey="temp"
                  dot={<CustomizedDot />}
                  stroke="transparent"
                  fill="url(#colorTemp)"
                  isAnimationActive={false}
                  // label={CustomizedLabel}
                >
                  <LabelList
                    dataKey={(props) => {
                      return `${props.temp}˚`;
                    }}
                    position="top"
                    offset={10}
                    fill="#1E3A8A"
                    fontSize="20"
                  />
                </Area>
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    );
  }
}
