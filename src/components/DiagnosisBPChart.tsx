import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  LinearScale,
  LineElement,
  PointElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(LineElement, Filler, CategoryScale, LinearScale, PointElement);

export function BPLineChart({ data }: { data: [] }) {
  const options = {
    animation: {
      duration: 0, // Disable animations by setting duration to 0
    },
    scales: {
      x: {
        display: true,
        border: {
          color: "#655B96",
        },
        grid: {
          tickColor: "#655B96",
          color: "rgb(0,0,0,0)",
          display: true,
        },
      },

      y: {
        display: true,
        border: {
          color: "#655B96",
        },
        grid: {
          tickColor: "#655B96",
          color: "rgb(0,0,0,0)",
          display: true,
        },
      },
    },
  };

  const labels = data.map((entry: any) => `${entry.month} ${entry.year}`);
  const systolicData = data.map(
    (entry: any) => entry.blood_pressure.systolic.value
  );
  const diastolicData = data.map(
    (entry: any) => entry.blood_pressure.diastolic.value
  );

  // const labels = data.map((entry: any) => `${entry.month} ${entry.year}`);
  // const systolicData = data.map(
  //   (entry: any) => entry.blood_pressure.systolic.value
  // );
  // const diastolicData = data.map(
  //   (entry: any) => entry.blood_pressure.diastolic.value
  // );

  const datasets = [
    {
      // pointRadius: 0,
      label: "systolic",
      borderColor: "#7E6CAB",
      data: systolicData,
    },

    {
      // pointRadius: 0,
      label: "diastolic",
      borderColor: "#C26EB4",
      data: diastolicData,
    },
  ];

  const dataMap = {
    labels: labels,
    datasets: datasets,
  };

  return (
    <div className="flex p-4 justify-center">
      {<Line data={dataMap} options={options}></Line>}
    </div>
  );
}
