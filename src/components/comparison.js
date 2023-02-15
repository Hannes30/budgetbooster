import Chart from "chart.js";
import ChartComponent from "./ChartComponent2";
import React, { useRef, useEffect, useState } from "react";
import cStyles from "../styles/comparison.module.css";

const Comparison = (props) => {
  const [data, setData] = useState(null);
  console.log(data);
  useEffect(() => {
    const sendDataToAPI = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/" + props.money + "&" + props.data.join(","),
          {
            method: "GET",
          }
        );
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error("Error sending data to API: ", error);
      }
    };
    sendDataToAPI();
  }, []);
  return (
    <div className={cStyles.wrapper}>
      <h1 className={cStyles.heading}> Du vs andere Spieler</h1>
      <div className={cStyles.chartParent}>
        <ChartComponent className={cStyles.chart} data={props.data} />
      </div>
    </div>
  );
};

export default Comparison;
