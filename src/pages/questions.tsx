import qStyles from "../styles/questions.module.css";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Nav from "./nav";
import OwnFooter from "./ownFooter";
const fragen: {
  [key: string]: { [key: string]: { a: string; p: number }[] };
} = require("../../public/fragen.json");

export default function Questions() {
  const [count, setCount] = useState(-1);
  const [money, setMoney] = useState(100);
  const [front, setFront] = useState(1);
  const [moneyMoving, setMoneyMoving] = useState(false);
  const [moneyMovingValue, setMoneyMovingValue] = useState(0);
  let vorzeichen = "";
  if (moneyMovingValue > 0) {
    vorzeichen = "+";
  }
  //console.log(fragen[1][0][0]["a"]); frage[fragenid][welchefragen][1.option][antwort]
  console.log(fragen[0][0][0]["p"]);
  let objToRender = <></>;

  if (count == -1) {
    objToRender = (
      <div className={qStyles.tutorialWrapper}>
        <div className={qStyles.tutorial}>
          Starte mit 100€ Startkapital und baue dein Vermögen täglich auf, indem
          du durch das Spiel navigierst. Das Spiel dauert 30 virtuelle Tage und
          du erhältst täglich zusätzliche 10€. DU musst jeden Tag eine
          entscheidung treffen wie du dein Geld ausgibst. Nicht immer ist die
          option wo man im moment am meisten geld behält die beste ;)
        </div>
        <button className={qStyles.startGame} onClick={() => setCount(0)}>
          Starten
        </button>
      </div>
    );
  } else if (count > -1) {
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
              setMoneyMovingValue(-fragen[count][0][0]["p"]);
              setMoneyMoving(true);
              setTimeout(() => {
                setMoney(money - fragen[count][0][0]["p"]);
                setMoneyMoving(false);
              }, 500);
              setTimeout(() => {
                setMoneyMovingValue(10);
                setMoneyMoving(true);
              }, 1000);
              setTimeout(() => {
                setMoneyMoving(false);
                setCount(count + 1);
                setMoney(money - fragen[count][0][0]["p"] + 10);
              }, 1500);
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
            <div className={qStyles.question1}>{fragen[count][0][0]["a"]}</div>
            <div className={qStyles.price}>{fragen[count][0][0]["p"]}€</div>
          </button>
          <button
            onClick={() => {
              setMoneyMovingValue(-fragen[count][0][1]["p"]);
              setMoneyMoving(true);
              setTimeout(() => {
                setMoney(money - fragen[count][0][1]["p"]);
                setMoneyMoving(false);
              }, 500);
              setTimeout(() => {
                setMoneyMovingValue(10);
                setMoneyMoving(true);
              }, 1000);
              setTimeout(() => {
                setMoneyMoving(false);
                setCount(count + 1);
                setMoney(money - fragen[count][0][1]["p"] + 10);
              }, 1500);
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
            <div className={qStyles.question2}>{fragen[count][0][1]["a"]}</div>
            <div className={qStyles.price}>{fragen[count][0][1]["p"]}€</div>
          </button>
        </div>
        <OwnFooter></OwnFooter>
      </div>
    );
  }
  return <>{objToRender}</>;
}
