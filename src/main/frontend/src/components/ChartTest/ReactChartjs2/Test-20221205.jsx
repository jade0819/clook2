import React, { useRef, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import Sun from "../../../assets/imgs/icon/sun.png";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  ChartDataLabels
);

const options = {
  responsive: false,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
    datalabels: {
      display: true,
      color: "white",
      align: "top",
      data: {
        callback: function (value, index) {
          return "#" + value;
        },
      },
    },
  },
  scales: {
    y: {
      // display: true,
      display: false,
      min: 0,
      max: 10,
    },
    x: {
      display: true,
      grid: {
        display: false,
      },
      // ticks: {
      //   // Include a dollar sign in the ticks
      //   callback: function (value, index, ticks) {
      //     return "$" + value;
      //   },
      // },
    },
  },
  layout: {
    padding: 20,
  },
  maintainAspectRatio: true, // default value. false일 경우 포함된 div의 크기에 맞춰서 그려짐.
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "12",
  "15",
  "18",
  "21",
  "24",
];

// const data = {
//   labels: [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "12",
//     "15",
//     "18",
//     "21",
//     "24",
//   ],
//   datasets: [
//     {
//       type: "line",
//       label: "Dataset 1",
//       borderColor: "rgb(53, 162, 235)",
//       backgroundColor: "rgba(53, 162, 235, 0.5)",
//       backgroundColor: (context) => {
//         // const ctx = document.querySelector("#canvas").getContext("2d");
//         console.log(context);
//         const ctx = context.chart.ctx;
//         const gradient = ctx.createLinearGradient(0, 0, 0, 200);
//         gradient.addColorStop(0, "rgba(250,174,50,1)");
//         gradient.addColorStop(0.5, "rgba(250,174,50,0.5)");
//         gradient.addColorStop(1, "rgba(250,174,50,0)");
//         return gradient;
//       },
//       borderWidth: 2,
//       pointBorderWidth: 2,
//       pointRadius: 6,
//       pointBackgroundColor: "#D3687F",
//       data: [1, 2, 3, 4, 5, 4, 3, 4, 2, 6, 7, 9],
//       fill: true,
//     },
//   ],
// };

export default function Test() {
  const chartRef = useRef(null);
  // console.dir(chartRef);

  let gradient = null;

  useEffect(() => {
    const chart = chartRef.current;

    if (chart) {
      const ctx = chart.ctx;
      const gradient = ctx.createLinearGradient(0, 0, 0, 200);
      gradient.addColorStop(0, "rgba(225,116,116,0.5)");
      gradient.addColorStop(1, "rgba(225,116,116,0.1)");
    }
  }, []);

  // const ctx = canvas.getContext("2d");
  // const gradientFill = ctx.createLinearGradient(0, 0, 0, 200);
  // gradientFill.addColorStop(0, "rgba(225,116,116,0.5)");
  // gradientFill.addColorStop(1, "rgba(225,116,116,0.1)");

  const data = {
    labels: labels,
    datasets: [
      {
        type: "line",
        label: "Dataset 1",
        borderColor: "rgb(53, 162, 235)",
        // backgroundColor: "rgba(53, 162, 235, 0.5)",
        backgroundColor: gradient,
        borderWidth: 2,
        pointBorderWidth: 2,
        pointRadius: 6,
        pointBackgroundColor: "#D3687F",
        data: [1, 2, 3, 4, 5, 4, 3, 4, 2, 6, 7, 9],
        fill: true,
      },
    ],
  };

  return (
    <div className="relative w-full h-[630px] my-6 bg-gray-400">
      <div className="absolute left-0 top-0 flex flex-col justify-center w-full h-full py-6 overflow-x-scroll">
        <div className="flex justify-between w-[1216px] pl-[0px]">
          <img src={Sun} />
          <img src={Sun} />
          <img src={Sun} />
          <img src={Sun} />
          <img src={Sun} />
          <img src={Sun} />
          <img src={Sun} />
          <img src={Sun} />
          <img src={Sun} />
          <img src={Sun} />
          <img src={Sun} />
          <img src={Sun} />
        </div>
        <Line
          ref={chartRef}
          id="canvas"
          options={options}
          data={data}
          width="1200px"
          height="500px"
        />
      </div>
    </div>
  );
}
