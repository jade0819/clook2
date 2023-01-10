import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
  linearGradient,
  ReferenceLine,
  Cell,
} from "recharts";
import Sun from "../../assets/imgs/sun.png";
import { timeFormat } from "../../util/timeFormat";

const data = [
  {
    name: "Page A",
    uv: 4000,
    dd: "12도",
  },
  {
    name: "Page B",
    uv: 3000,
    dd: "12도",
  },
  {
    name: "Page C",
    uv: 2000,
    dd: "12도",
  },
  {
    name: "Page D",
    uv: 2780,
    dd: "12도",
  },
  {
    name: "Page E",
    uv: 1890,
    dd: "12도",
  },
  {
    name: "Page F",
    uv: 2390,
    dd: "12도",
  },
  {
    name: "Page G",
    uv: 3490,
    dd: "12도",
  },
  {
    name: "Page G",
    uv: 3490,
    dd: "12도",
  },
  {
    name: "Page G",
    uv: 3490,
    dd: "12도",
  },
  {
    name: "Page G",
    uv: 3490,
    dd: "12도",
  },
  {
    name: "Page G",
    uv: 3490,
    dd: "12도",
  },
  {
    name: "Page G",
    uv: 3490,
    dd: "12도",
  },
];

const time = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23,
];

class CustomizedAxisTick extends PureComponent {
  render() {
    const { x, y, stroke, payload } = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={20}
          y={-14}
          dy={0}
          textAnchor="end"
          fill="#666"
          stroke="blue"
          style={{ fontSize: "12px", fill: "#BCBCBC" }}
        >
          {payload.value}
        </text>
        <image
          // xlinkHref={props.payload.value}
          xlinkHref={Sun}
          x={-20}
          y={-10}
          height="40px"
          width="40px"
          textAnchor="middle"
          fill="#666"
        />
      </g>
    );
  }
}

const currentTime = 1;

class CustomizedDot extends React.Component {
  render() {
    const { cx, cy, value, index } = this.props;

    console.log(value[1]);
    console.dir(this.props);
    const idx = time.indexOf(currentTime);

    if (index === idx) {
      return (
        <circle
          cx={cx - 10}
          cy={cy - 10}
          r={25}
          stroke="black"
          strokeWidth={3}
          fill="blue"
        />
      );
    } else {
      return (
        <circle
          cx={cx - 10}
          cy={cy - 10}
          r={25}
          stroke="black"
          strokeWidth={3}
          fill="red"
        />
      );
    }
  }
}

export default class ReChart2 extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/simple-area-chart-4ujxw";

  render() {
    return (
      <div className="relative w-full h-[500px] my-6">
        <div className="absolute left-0 top-0 flex flex-col justify-center w-full h-full overflow-x-scroll">
          <div className="flex justify-between w-[2416px] pl-[0px]">
            {time.map((item) => {
              return (
                <div>
                  <span>{timeFormat(item)}</span>
                  <img src={Sun} />
                </div>
              );
            })}
          </div>
          <div className="w-[2400px] h-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                // width={1000}
                height={400}
                data={data}
                margin={{
                  top: 20,
                  right: 20,
                  left: -30,
                  bottom: 40,
                }}
              >
                <defs>
                  {/* <linearGradient id="colorUv" x1="0" y1="0"> */}
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#129a74" stopOpacity={0.5} />
                    <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.5} />
                  </linearGradient>
                </defs>
                <XAxis
                  axisLine={false}
                  dataKey="name"
                  // tick={{ stroke: "red", strokeWidth: 1 }}
                  // tick={false}
                  tick={<CustomizedAxisTick />}
                  orientation="top"
                />
                <YAxis
                  axisLine={false}
                  dataKey="uv"
                  type="number"
                  domain={["dataMin - 100", "dataMax + 100"]}
                  tick={false}
                />
                {/* <Tooltip cursor={false} /> */}
                <Area
                  type="monotone"
                  dataKey="uv"
                  // dot={{ stroke: "red", strokeWidth: 2, r: 6 }}
                  dot={<CustomizedDot />}
                  stroke="#ff0000"
                  // fill="#8884d8"
                  fill="url(#colorUv)"
                  isAnimationActive={false}
                >
                  <LabelList dataKey="dd" position="top"></LabelList>
                </Area>
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    );
  }
}

{
  /* <Bar dataKey="uv" fill="#2B5CE7">
  {data.map((entry, index) => (
    <Cell
      fill={focusBar === index ? "#2B5CE7" : "rgba(43, 92, 231, 0.2)"}
      // for this, we make the hovered colour #2B5CE7, else its opacity decreases to 20%
    />
  ))}
</Bar>; */
}
