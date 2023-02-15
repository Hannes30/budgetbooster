import Chart from "chart.js";
import React, { useRef, useEffect } from "react";
import qStyles from "../styles/questions.module.css";

const ItemsYouCouldBuy = (props) => {
  return (
    <div className={qStyles.itemsBuy}>
      <h1>Dinge die du dir jetzt Leisten kannst</h1>
      <div className={qStyles.cbuyContainer}>
        {Object.entries(props.itemsBuy)
          .sort((a, b) => {
            return a[1].price - b[1].price;
          })
          .map((item, index) => (
            <div key={index} className={qStyles.cbuy}>
              <div className={qStyles.cbuyname}>
                {item[1]["emoji"] + "       " + item[1]["name"]}
              </div>
              <div
                className={
                  qStyles.cbuyprice +
                  " " +
                  (item[1]["price"] > props.money ? qStyles.red : qStyles.green)
                }
              >
                {item[1]["price"]}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ItemsYouCouldBuy;
