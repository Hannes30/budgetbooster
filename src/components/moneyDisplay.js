import Chart from "chart.js";
import React, { useRef, useEffect } from "react";
import qStyles from "../styles/questions.module.css";

const MoneyDisplay = (props) => {
  return (
    <div className={qStyles.moneyDisplayParent}>
      <div className={qStyles.dayDisplay}>
        Tag
        <span className={qStyles.greenSpan}> {props.count + 1}</span>
      </div>
      <div className={qStyles.moneyDisplay}>
        {props.money}€ {props.moneyMoving}
        <div
          className={
            qStyles.addmoney +
            " " +
            (props.moneyMoving ? qStyles.moving : qStyles.addmoneyInvisible) +
            " " +
            (props.moneyMovingValue > 0 ? qStyles.green : qStyles.red)
          }
        >
          {props.vorzeichen}
          {props.moneyMovingValue}
        </div>
      </div>
    </div>
  );
};

export default MoneyDisplay;
