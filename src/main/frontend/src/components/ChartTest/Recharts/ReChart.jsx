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
} from "recharts";
import Sun from "../../assets/imgs/sun.png";

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
  {
    name: "Page G",
    uv: 3490,
    dd: "12도",
  },
];

export default class ReChart extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/simple-area-chart-4ujxw";

  render() {
    return (
      <div className="w-auto h-full">
        <div className="flex flex-row justify-between w-full pl-8">
          <img src={Sun}></img>
          <img src={Sun}></img>
          <img src={Sun}></img>
          <img src={Sun}></img>
          <img src={Sun}></img>
          <img src={Sun}></img>
          <img src={Sun}></img>
        </div>

        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            // width={1000}
            height={400}
            data={data}
            margin={{
              top: 0,
              right: 0,
              left: 0,
              bottom: 40,
            }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="name"
              // tick={{ stroke: "red", strokeWidth: 1, tickSize: "1" }}
              // tickSize="1"
              tick={false}
              orientation="bottom"
            />
            <YAxis
              dataKey="uv"
              type="number"
              domain={["dataMin - 100", "dataMax + 100"]}
              tick={false}
            />
            {/* <Tooltip cursor={false} /> */}
            <Area
              type="monotone"
              dataKey="uv"
              dot={{ stroke: "red", strokeWidth: 4, size: 10 }}
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
    );
  }
}
