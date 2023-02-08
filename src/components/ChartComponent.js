import Chart from "chart.js";
import cStyles from "../styles/chart.module.css";
import React, { useRef, useEffect } from "react";

const MyChart = (props) => {
  const chartRef = useRef(null);

  useEffect(() => {
    new Chart(chartRef.current, {
      type: "line",
      data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        datasets: [
          {
            label: "Du",
            data: props.data,
            backgroundColor: ["rgba(0, 99, 132, 0.2)"],
            borderColor: ["rgba(54, 162, 235, 1)"],
          },
          {
            label: "Best",
            data: [299, 309, 318, 308, 318, 288, 296, 306, 286, 296, 306, 386],
            backgroundColor: ["rgba(0, 132, 0, 0.2)"],
            borderColor: ["rgba(54, 235, 0, 1)"],
          },
          {
            label: "Worst",
            data: [295, 298, 305, 275, 255, 265, 265, 255, 195, 175, 185, 179],
            backgroundColor: ["rgba(0, 132, 0, 0.2)"],
            borderColor: ["rgba(235, 100, 0, 1)"],
          },
        ],
      },
    });
  }, []);

  return <canvas className={cStyles.chart} ref={chartRef} />;
};

export default MyChart;
