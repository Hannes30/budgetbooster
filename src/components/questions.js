import qStyles from "../styles/questions.module.css";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Nav from "./nav";
import OwnFooter from "./ownFooter";
import { Chart } from "chart.js";
import fragen from "../../public/fragen.json";
import ChartComponent from "./ChartComponent";

export default function Questions() {
  const [count, setCount] = useState(-1);
  const [clickable, setClickable] = useState(true);
  const [money, setMoney] = useState(300);
  const [front, setFront] = useState(1);
  const [moneyMoving, setMoneyMoving] = useState(false);
  const [moneyMovingValue, setMoneyMovingValue] = useState(0);
  const [qoption, setQoption] = useState(0);
  const [messageVisibilitty, setMessageVisibillity] = useState(false);
  const [moneyHistory, setMoneyHistory] = useState(new Array());

  let vorzeichen = "";
  if (moneyMovingValue > 0) {
    vorzeichen = "+";
  }

  let objToRender = <></>;
  if (count == -1) {
    objToRender = (
      <div className={qStyles.tutorialWrapper}>
        <div className={qStyles.tutorial}>
          Starte mit 300€ Startkapital und baue dein Vermögen täglich auf, indem
          du durch das Spiel navigierst. Das Spiel dauert 30 virtuelle Tage und
          du erhältst täglich zusätzliche 10€. Du musst jeden Tag eine
          entscheidung treffen wie du dein Geld ausgibst. Nicht immer ist die
          Option wo man im Moment am meisten Geld behält die Beste ;)
        </div>
        <button className={qStyles.startGame} onClick={() => setCount(0)}>
          Starten
        </button>
      </div>
    );
  } else if (count > -1 && count < 12) {
    if (!messageVisibilitty) {
      objToRender = (
        <div className={qStyles.Wrapper}>
          <div className={qStyles.moneyDisplayParent}>
            <div className={qStyles.dayDisplay}>
              <span className={qStyles.greenSpan}>{count + 1}</span>
            </div>
            <div className={qStyles.moneyDisplay}>
              {money}€ {moneyMoving}
              <div
                className={
                  qStyles.addmoney +
                  " " +
                  (moneyMoving ? qStyles.moving : qStyles.addmoneyInvisible) +
                  " " +
                  (moneyMovingValue > 0 ? qStyles.green : qStyles.red)
                }
              >
                {vorzeichen}
                {moneyMovingValue}
              </div>
            </div>
          </div>

          <div className={qStyles.questions}>
            <button
              onClick={() => {
                if (clickable) {
                  setQoption(0);
                  setClickable(false);
                  setMoneyMovingValue(-fragen[count][0][0]["p"]);
                  setMoneyMoving(true);
                  setTimeout(() => {
                    setMoney(money - fragen[count][0][0]["p"]);
                    setMoneyMoving(false);
                    setMessageVisibillity(true);
                  }, 500);
                }
              }}
              className={
                qStyles.question1Parent +
                " " +
                qStyles.question +
                " " +
                (front == 1 ? qStyles.z1 : qStyles.z2)
              }
              onMouseOver={() => setFront(2)}
            >
              <div className={qStyles.question1}>
                {fragen[count][0][0]["a"]}
              </div>
              <div className={qStyles.price}>{fragen[count][0][0]["p"]}€</div>
            </button>
            <button
              onClick={() => {
                if (clickable) {
                  setQoption(1);
                  setClickable(false);
                  setMoneyMovingValue(-fragen[count][0][1]["p"]);
                  setMoneyMoving(true);
                  setTimeout(() => {
                    setMoney(money - fragen[count][0][1]["p"]);
                    setMoneyMoving(false);
                    setMessageVisibillity(true);
                  }, 500);
                }
              }}
              className={
                qStyles.question2Parent +
                " " +
                qStyles.question +
                " " +
                (front == 1 ? qStyles.z2 : qStyles.z1)
              }
              onMouseOver={() => setFront(1)}
            >
              <div className={qStyles.question2}>
                {fragen[count][0][1]["a"]}
              </div>
              <div className={qStyles.price}>{fragen[count][0][1]["p"]}€</div>
            </button>
          </div>
          <OwnFooter></OwnFooter>
        </div>
      );
    } else if (messageVisibilitty) {
      objToRender = (
        <div className={qStyles.message}>
          <div className={qStyles.messageContainer}>
            {fragen[count][0][qoption]["m"]}
          </div>
          <button className={qStyles.messageButton} onClick={() => newDay()}>
            weiter
          </button>
        </div>
      );
    }
  } else {
    objToRender = (
      <div className={qStyles.stats}>
        <h1>Ausgaben</h1>
        <div className={qStyles.statsGraph}>
          <ChartComponent data={moneyHistory}></ChartComponent>
        </div>
      </div>
    );
  }

  function newDay() {
    setMoneyHistory([...moneyHistory, money]);
    setMessageVisibillity(false);
    setCount(count + 1);
    setTimeout(() => {
      setMoneyMovingValue(10);
      setMoneyMoving(true);
    }, 250);
    setTimeout(() => {
      setMoneyMoving(false);
      setMoney(money - fragen[count][0][qoption]["p"] + 10);
      setClickable(true);
    }, 500);
  }
  return <>{objToRender}</>;
}
