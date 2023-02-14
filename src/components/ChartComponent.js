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
          21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
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
              499, 509, 518, 508, 508, 478, 486, 476, 456, 466, 476, 536, 521,
              531, 541, 551, 601, 611, 611, 501, 501, 486, 496, 486, 496,
            ],
            backgroundColor: ["rgba(54, 235, 0, .33)"],
            borderColor: ["rgba(54, 235, 0, 1)"],
          },
          {
            label: "Worst",
            data: [
              495, 498, 505, 475, 465, 475, 475, 415, 355, 335, 345, 345, 315,
              285, 255, 255, 249, 59, 29, -211,
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
