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
              499, 512, 526, 521, 526, 501, 514, 509, 494, 509, 524, 684, 674,
              689, 704, 719, 819, 809, 814, 729, 744, 719, 730, 725, 740, 860,
              675, 690, 685, 650,
            ],
            backgroundColor: ["rgba(54, 235, 0, .33)"],
            borderColor: ["rgba(54, 235, 0, 1)"],
          },
          {
            label: "Worst",
            data: [
              495, 503, 515, 490, 485, 500, 505, 450, 395, 360, 375, 365, 340,
              315, 330, 330, 324, 289, 264, 79, 74, 49, 44, 19, 19, -41, -426,
              -436, -461, -546,
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
