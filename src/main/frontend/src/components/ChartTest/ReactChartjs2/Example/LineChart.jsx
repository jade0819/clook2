import { useEffect, useRef, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Filler,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Line } from "react-chartjs-2";
import Sun from "../../../../assets/imgs/icon/sun.png";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Filler,
  ChartDataLabels
);

export const options = {
  responsive: false,
  // datasetStrokeWidth: 3,
  // pointDotStrokeWidth: 4,
  plugins: {
    legend: false,
    title: false,
    // legend: {
    //   position: "top",
    // },
    // title: {
    //   display: true,
    //   text: "Chart.js Line Chart",
    // },
    datalabels: {
      display: true,
      color: "red",
      align: "top",
      formatter: function (value, context) {
        return `${value}도`;
      },
      // formatter: (value, context) => `${value}도`,
    },
  },
  scales: {
    y: {
      display: true,
      // display: false,
      min: -30,
      max: 45,
    },
    x: {
      display: true,
      position: "top",
      grid: {
        display: false,
      },
      // ticks: {
      //   callback: function (value, index) {
      //     return (
      //       <g>
      //         <image xlinkHref={Sun} />
      //         <text>{value}</text>
      //         <text>{index}</text>
      //       </g>
      //     );
      //   },
      // },
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
  // default value. false일 경우 포함된 div의 크기에 맞춰서 그려짐.
  maintainAspectRatio: true,
};

const labels = [
  "02:00",
  "04:00",
  "06:00",
  "08:00",
  "10:00",
  "12:00",
  "14:00",
  "16:00",
  "18:00",
  "20:00",
  "22:00",
  "00:00",
];

export const data = {
  labels,
  datasets: [
    {
      // fill: true,
      fill: "start",
      label: "Dataset 2",
      data: [
        25.0, 32.4, 22.2, 39.4, 34.2, 22.0, 23.2, -24.1, 20.0, -18.4, 19.1,
        17.4,
      ],
      borderColor: "rgb(53, 162, 235)",
      // backgroundColor: "rgba(53, 162, 235, 0.5)",
      borderWidth: 4,
      pointBorderWidth: 2,
      pointRadius: 6,
      pointBackgroundColor: "#D3687F",
    },
  ],
};

export default function LineChart() {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  useEffect(() => {
    const chart = chartRef.current;
    if (!chart) return;

    // console.log(chart.canvas.getContext("2d"));
    // console.log(chart.chartArea);

    const ctx = chart.canvas.getContext("2d");
    const area = chart.chartArea;

    setChartData({
      ...data,
      datasets: data.datasets.map((dataset) => ({
        ...dataset,
        backgroundColor: createGradient(ctx, chart.chartArea),
        // borderColor: createGradient(ctx, chart.chartArea),
      })),
    });
  }, [setChartData]);

  return (
    <Line
      ref={chartRef}
      options={options}
      data={chartData}
      width="800"
      height="500"
    />
  );
}

function createGradient(ctx, area) {
  const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);
  gradient.addColorStop(0, "rgba(217, 217, 217, 0.79)");
  gradient.addColorStop(0.5, "rgba(191, 219, 254, 1)");
  gradient.addColorStop(1, "rgba(191, 219, 254, 1)");

  return gradient;
}
