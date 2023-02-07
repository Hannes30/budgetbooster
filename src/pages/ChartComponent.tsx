import React, { useEffect, useRef, useState } from "react";
import { Chart } from "chart.js";

const ChartComponent = (props: any) => {
  const chartRef = useRef(null);
  const [moneyHistory, setMoneyHistory] = useState([]);

  useEffect(() => {
    if (chartRef.current) {
      new Chart(chartRef.current, {
        type: "line",
        data: {
          labels: Array.from({ length: moneyHistory.length }, (_, i) => i + 1),
          datasets: [
            {
              label: "Money",
              data: moneyHistory,
              backgroundColor: "rgba(0, 0, 0, 0)",
              borderColor: "rgba(0, 0, 0, 1)",
              borderWidth: 2,
              pointRadius: 3,
            },
          ],
        },
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        },
      });
    }
  }, [moneyHistory]);

  return <canvas ref={chartRef} />;
};

export default ChartComponent;
