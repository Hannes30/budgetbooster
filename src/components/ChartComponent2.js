import Chart from "chart.js";
import React, { useRef, useEffect } from "react";

const MyChart = (props) => {
  const chartRef = useRef(null);

  console.log(props.data2);
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
            label: "Durschnitt",
            data: props.data2,
            backgroundColor: ["rgba(157,121,188,0.3)"],
            borderColor: ["rgba(157,121,188)"],
          },
        ],
      },
    });
  }, []);

  return <canvas ref={chartRef} />;
};

export default MyChart;
