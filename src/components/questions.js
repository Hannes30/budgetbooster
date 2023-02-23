import qStyles from "../styles/questions.module.css";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Chart } from "chart.js";
import itemsBuy from "../../public/items.json";
import ChartComponent from "./ChartComponent";
import Comparison from "./comparison";
import Message from "./message";
import Tutorial from "./Tutorial";
import MoneyDisplay from "./moneyDisplay";
import ItemsYouCouldBuy from "./itemsYouCouldBuy";
import Sources from "./sources";

export default function Questions() {
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
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getQuestions();
      setQuestions(data);
    }
    fetchData();
  }, []);
  async function getQuestions() {
    const response = await fetch("/api/fragen");
    const data = await response.json();
    return data;
  }
  let vorzeichen = "";
  if (moneyMovingValue > 0) {
    vorzeichen = "+";
  }
  let objToRender = <></>;
  if (count == 32) {
    objToRender = <Comparison data={moneyHistory} money={money}></Comparison>;
  } else if (count == 10) {
    let message =
      chosenOptions[5] == 0
        ? "Deine Mutter schenkt dir eine Kerze und 180€ in bar"
        : "Deine Mutter schenkt dir nichts da du ihr auch nichts geschenkt hast";
    objToRender = (
      <Message cb={newDay} value={chosenOptions[5] == 0 ? 180 : 0}>
        Es ist dein Geburtstag. {message}
      </Message>
    );
  } else if (count == 15) {
    if (chosenOptions[10] == 0) {
      objToRender = (
        <Message cb={newDay} value={100}>
          Durch dein erlangtes Wissen aus den 2 Büchern die du dir an tag 11
          gekauft hast hast du 100 euro verdient
        </Message>
      );
    } else {
      newDay(0);
    }
  } else if (count == 24) {
    if (chosenOptions[21] == 0) {
      objToRender = (
        <Message cb={newDay} value={150}>
          Durch dein erlangtes Wissen aus dem Online Kurs hast du 150€ verdient
        </Message>
      );
    } else {
      newDay(0);
    }
  } else if (count == -1) {
    objToRender = <Tutorial setCount={setCount} value={0} money={money} />;
  } else if (count > -1 && count < Object.keys(questions).length + 2) {
    if (!messageVisibilitty) {
      objToRender = (
        <div className={qStyles.Wrapper}>
          <MoneyDisplay
            money={money}
            moneyMoving={moneyMoving}
            moneyMovingValue={moneyMovingValue}
            vorzeichen={vorzeichen}
            count={count}
          />
          <div className={qStyles.questions}>
            <button
              onClick={() => {
                if (clickable) {
                  setChosenOption([...chosenOptions, 0]);
                  setQoption(0);
                  setClickable(false);
                  setMoneyMovingValue(-questions[count][0][0]["p"]);
                  setMoneyMoving(true);
                  setTimeout(() => {
                    setMoney(money - questions[count][0][0]["p"]);
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
                {questions[count][0][0]["a"]}
              </div>
              <div className={qStyles.price}>
                {questions[count][0][0]["p"]}€
              </div>
            </button>
            <button
              onClick={() => {
                if (clickable) {
                  setChosenOption([...chosenOptions, 1]);
                  setQoption(1);
                  setClickable(false);
                  setMoneyMovingValue(-questions[count][0][1]["p"]);
                  setMoneyMoving(true);
                  setTimeout(() => {
                    setMoney(money - questions[count][0][1]["p"]);
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
                {questions[count][0][1]["a"]}
              </div>
              <div className={qStyles.price}>
                {questions[count][0][1]["p"]}€
              </div>
            </button>
          </div>
        </div>
      );
    } else if (messageVisibilitty) {
      objToRender = (
        <div>
          <Message cb={newDay} value={15}>
            {questions[count][0][qoption]["m"]}
          </Message>
          <Sources count={count} />
        </div>
      );
    }
  } else {
    console.log(moneyHistory);
    objToRender = (
      <div className={qStyles.stats}>
        <h1>Geld</h1>
        <div className={qStyles.endMoneyDisplay}>{money}€</div>
        <h1>Ausgaben</h1>
        <div className={qStyles.statsGraphContainer}>
          <ChartComponent
            data={moneyHistory}
            className={qStyles.statsGraph}
          ></ChartComponent>
        </div>
        <ItemsYouCouldBuy itemsBuy={itemsBuy} money={money} />
        <button
          className={qStyles.startGame + " " + qStyles.mgTop}
          onClick={() => setCount(32)}
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

  return <>{objToRender}</>;
}
