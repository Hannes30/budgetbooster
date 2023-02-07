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
            label: "Geld",
            data: props.data,
            backgroundColor: ["rgba(0, 99, 132, 0.2)"],
            borderColor: ["rgba(54, 162, 235, 1)"],
          },
        ],
      },
    });
  }, []);

  return <canvas className={cStyles.chart} ref={chartRef} />;
};

export default MyChart;
