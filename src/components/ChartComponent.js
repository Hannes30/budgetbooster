import Chart from "chart.js";
import React, { useRef, useEffect } from "react";

const MyChart = (props) => {
  const chartRef = useRef(null);

  useEffect(() => {
    new Chart(chartRef.current, {
      type: "line",
      data: {
        labels: [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        ],
        datasets: [
          {
            label: "Du",
            data: props.data,
            backgroundColor: ["rgba(54, 162, 235, .33)"],
            borderColor: ["rgba(54, 162, 235, 1)"],
          },
          {
            label: "Best",
            data: [
              299, 309, 318, 308, 318, 288, 296, 306, 286, 296, 306, 366, 351,
              361, 371, 381, 431, 441, 441, 386,
            ],
            backgroundColor: ["rgba(54, 235, 0, .33)"],
            borderColor: ["rgba(54, 235, 0, 1)"],
          },
          {
            label: "Worst",
            data: [
              295, 298, 305, 275, 255, 265, 265, 255, 195, 175, 185, 185, 155,
              125, 95, 95, 89, -101, -131, -371,
            ],
            backgroundColor: ["rgba(235, 50, 0, .33)"],
            borderColor: ["rgba(235, 50, 0, 1)"],
          },
        ],
      },
    });
  }, []);

  return <canvas ref={chartRef} />;
};

export default MyChart;
