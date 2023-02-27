import Chart from "chart.js";
import ChartComponent from "./ChartComponent2";
import React, { useRef, useEffect, useState } from "react";
import cStyles from "../styles/comparison.module.css";
import Link from "next/link";
import qStyles from "../styles/questions.module.css";

const Comparison = (props) => {
  const [data, setData] = useState({ money: 0, history: "" });
  const [chart, setChart] = useState(false);
  let objToRender = <></>;
  if (chart) {
    objToRender = (
      <ChartComponent
        className={cStyles.chart}
        data={props.data}
        data2={data.history.split(",").map(Number).map(Math.floor)}
      />
    );
  }
  useEffect(() => {
    const sendDataToAPI = async () => {
      try {
        const response = await fetch(
          "/api/stats?money=" +
            props.money +
            "&moneyhistory=" +
            props.data.join(","),
          {
            method: "GET",
          }
        );
        const json = await response.json();
        setData(json);
        setChart(true);
      } catch (error) {
        console.error("Error sending data to API: ", error);
      }
    };
    sendDataToAPI();
  }, []);
  return (
    <div className={cStyles.wrapper}>
      <h1 className={cStyles.heading}> Du vs andere Spieler</h1>
      <h2 className={cStyles.heading2}>Geld</h2>
      <div className={cStyles.avarageMoneyDisplay}>
        {data.money.toFixed(2)}€
      </div>
      <div className={cStyles.avarageMoneyText}>
        Soviel Geld hat der Durchschnitts Spieler am Ende des Spiels
      </div>
      <div className={cStyles.chartParent}>{objToRender}</div>
      <h2>
        Vielen Dank fürs Spielen von <strong>BudgetBooster</strong>.
      </h2>
      <Link href="./">
        <button className={qStyles.startGame}>Home</button>
      </Link>
    </div>
  );
};

export default Comparison;
