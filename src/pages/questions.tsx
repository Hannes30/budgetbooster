import qStyles from "../styles/questions.module.css";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Nav from "./nav";
import OwnFooter from "./ownFooter";

export default function Questions() {
  const qArray = [
    [],
    [
      "Ich trinke nach der Schule meinen Kaffee bei Starbucks",
      "Ich mache mir daheim einen Kaffe mit der Kaffe Maschine",
      5,
      1,
    ],
    [
      "Ich verzichte auf das Rauchen",
      "Ich kaufe mir nach der Schule Zigaretten",
      0,
      7,
    ],
  ];
  const [count, setCount] = useState(0);
  let objToRender = <></>;

  if (count == 0) {
    objToRender = (
      <div className={qStyles.tutorialWrapper}>
        <div className={qStyles.tutorial}>
          Starte mit 100€ Startkapital und baue dein Vermögen täglich auf, indem
          du durch das Spiel navigierst. Das Spiel dauert 30 virtuelle Tage und
          du erhältst täglich zusätzliche 10€. DU musst jeden Tag eine
          entscheidung treffen wie du dein Geld ausgibst. Nicht immer ist die
          option wo man im moment am meisten geld behält die beste ;)
        </div>
        <button className={qStyles.startGame} onClick={() => setCount(1)}>
          Starten
        </button>
      </div>
    );
  } else if (count > 0) {
    objToRender = (
      <div className={qStyles.Wrapper}>
        <div className={qStyles.moneyDisplayParent}>
          <div className={qStyles.moneyDisplay}>100€</div>
        </div>

        <div className={qStyles.questions}>
          <button className={qStyles.question1Parent + " " + qStyles.question}>
            <div className={qStyles.question1}>{qArray[count][0]}</div>
            <div className={qStyles.price}>{qArray[count][2]}€</div>
          </button>
          <button className={qStyles.question2Parent + " " + qStyles.question}>
            <div className={qStyles.question2}>{qArray[count][1]}</div>
            <div className={qStyles.price}>{qArray[count][3]}€</div>
          </button>
        </div>
        <OwnFooter></OwnFooter>
      </div>
    );
  }
  return <>{objToRender}</>;
}
