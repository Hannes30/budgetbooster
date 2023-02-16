import React, { useRef, useEffect } from "react";
import qStyles from "../styles/questions.module.css";

const Tutorial = (props) => {
  return (
    <div className={qStyles.tutorialWrapper}>
      <div className={qStyles.tutorial}>
        Starte mit {props.money}€ Startkapital und baue dein Vermögen täglich
        auf, indem du durch das Spiel navigierst. Das Spiel dauert 30 virtuelle
        Tage und du erhältst täglich zusätzliche 15€. Du musst jeden Tag eine
        Entscheidung treffen wie du dein Geld ausgibst. Nicht immer ist die
        Option wo man im Moment am meisten Geld behält die Beste ;)
      </div>
      <button
        className={qStyles.startGame}
        onClick={() => props.setCount(props.value)}
      >
        Starten
      </button>
    </div>
  );
};

export default Tutorial;
