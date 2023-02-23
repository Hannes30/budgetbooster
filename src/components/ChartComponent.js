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
              499, 512, 526, 521, 526, 501, 514, 489, 474, 489, 504, 664, 654,
              669, 684, 699, 799, 789, 794, 744, 759, 734, 745, 740, 755, 875,
              860, 875, 870, 835,
            ],
            backgroundColor: ["rgba(54, 235, 0, .33)"],
            borderColor: ["rgba(54, 235, 0, 1)"],
          },
          {
            label: "Worst",
            data: [
              495, 503, 515, 490, 485, 500, 505, 450, 395, 360, 375, 365, 340,
              315, 290, 290, 284, 249, 224, 89, 84, 99, 94, 69, 69, 9, -46, -56,
              -81, -166,
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
