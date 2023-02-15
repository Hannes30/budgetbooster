import qStyles from "../styles/questions.module.css";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Nav from "./nav";
import OwnFooter from "./ownFooter";
import { Chart } from "chart.js";
import fragen from "../../public/fragen.json";
import itemsBuy from "../../public/items.json";
import ChartComponent from "./ChartComponent";

export default function Questions() {
  let fragen1 = getquestions();
  console.log(fragen1);
  const [count, setCount] = useState(-1);
  const [clickable, setClickable] = useState(true);
  const [money, setMoney] = useState(500);
  const [front, setFront] = useState(1);
  const [moneyMoving, setMoneyMoving] = useState(false);
  const [moneyMovingValue, setMoneyMovingValue] = useState(0);
  const [qoption, setQoption] = useState(0);
  const [messageVisibilitty, setMessageVisibillity] = useState(false);
  const [moneyHistory, setMoneyHistory] = useState(new Array());
  const [chosenOptions, setChosenOption] = useState(new Array());
  let vorzeichen = "";
  if (moneyMovingValue > 0) {
    vorzeichen = "+";
  }

  let objToRender = <></>;
  if (count == 21 && chosenOptions[21] == 0) {
    newDay(-20);
  } else if (count == 20) {
    newDay(0);
  }
  if (count == 31) {
    objToRender = (
      <div className={qStyles.Wrapper}>
        <div className={qStyles.comparing}></div>
      </div>
    );
  } else if (count == 10) {
    let message =
      chosenOptions[5] == 0
        ? "Deine Tante schenkt dir eine Kerze und 80€ in bar"
        : "Deine Tante schenkt dir nichts da du ihr auch nichts geschenkt hast";
    objToRender = (
      <div className={qStyles.message}>
        <div className={qStyles.messageContainer}>
          Es ist dein Geburtstag. {message}
        </div>
        <button
          className={qStyles.messageButton}
          onClick={() => (chosenOptions[5] == 0 ? newDay(80) : newDay(0))}
        >
          weiter
        </button>
      </div>
    );
  } else if (count == 15) {
    if (chosenOptions[10] == 0) {
      objToRender = (
        <div className={qStyles.message}>
          <div className={qStyles.messageContainer}>
            Durch dein erlangtes Wissen aus den 2 Büchern die du dir an tag 11
            gekauft hast hast du 50 euro verdient
          </div>
          <button className={qStyles.messageButton} onClick={() => newDay(50)}>
            weiter
          </button>
        </div>
      );
    } else {
      newDay(0);
    }
  } else if (count == -1) {
    objToRender = (
      <div className={qStyles.tutorialWrapper}>
        <div className={qStyles.tutorial}>
          Starte mit {money}€ Startkapital und baue dein Vermögen täglich auf,
          indem du durch das Spiel navigierst. Das Spiel dauert 30 virtuelle
          Tage und du erhältst täglich zusätzliche 10€. Du musst jeden Tag eine
          entscheidung treffen wie du dein Geld ausgibst. Nicht immer ist die
          Option wo man im Moment am meisten Geld behält die Beste ;)
        </div>
        <button className={qStyles.startGame} onClick={() => setCount(0)}>
          Starten
        </button>
      </div>
    );
  } else if (count > -1 && count < Object.keys(fragen).length + 2) {
    if (!messageVisibilitty) {
      if (money < 0) {
        setMoney(0);
        setCount(30);
      }
      objToRender = (
        <div className={qStyles.Wrapper}>
          <div className={qStyles.moneyDisplayParent}>
            <div className={qStyles.dayDisplay}>
              Tag
              <span className={qStyles.greenSpan}> {count + 1}</span>
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
                  setChosenOption([...chosenOptions, 0]);
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
                  setChosenOption([...chosenOptions, 1]);
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
        </div>
      );
    } else if (messageVisibilitty) {
      objToRender = (
        <div className={qStyles.message}>
          <div className={qStyles.messageContainer}>
            {fragen[count][0][qoption]["m"]}
          </div>
          <button className={qStyles.messageButton} onClick={() => newDay(10)}>
            weiter
          </button>
        </div>
      );
    }
  } else {
    objToRender = (
      <div className={qStyles.stats}>
        <h1>Ausgaben</h1>
        <div className={qStyles.statsGraphContainer}>
          <ChartComponent
            data={moneyHistory}
            className={qStyles.statsGraph}
          ></ChartComponent>
        </div>
        <div className={qStyles.itemsBuy}>
          <h1>Dinge die du dir jetzt Leisten kannst</h1>
          <div className={qStyles.cbuyContainer}>
            {Object.entries(itemsBuy)
              .sort((a, b) => {
                return a[1].price - b[1].price;
              })
              .map((item, index) => (
                <div className={qStyles.cbuy}>
                  <div className={qStyles.cbuyname}>
                    {item[1]["emoji"] + "       " + item[1]["name"]}
                  </div>
                  <div
                    className={
                      qStyles.cbuyprice +
                      " " +
                      (item[1]["price"] > money ? qStyles.red : qStyles.green)
                    }
                  >
                    {item[1]["price"]}
                  </div>
                </div>
              ))}
          </div>
        </div>
        <button
          className={qStyles.startGame + " " + qStyles.mgTop}
          onClick={() => setCount(31)}
        >
          Vergleichen
        </button>
      </div>
    );
    let message = "[";
    moneyHistory.forEach((e) => {
      message += "" + e + ",";
    });
    message += "]";
  }

  function newDay(moneyAmount) {
    setMoneyHistory([...moneyHistory, money]);
    setMessageVisibillity(false);
    setCount(count + 1);
    setTimeout(() => {
      setMoneyMovingValue(moneyAmount);
      setMoneyMoving(true);
    }, 250);
    setTimeout(() => {
      setMoneyMoving(false);
      setMoney(money + moneyAmount);
      setClickable(true);
    }, 500);
  }
  async function getquestions() {
    const response = await fetch("/api/fragen");
    const data = await response.json();
    return data;
  }
  return <>{objToRender}</>;
}
