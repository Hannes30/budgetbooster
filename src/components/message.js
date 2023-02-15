import Chart from "chart.js";
import React, { useRef, useEffect } from "react";
import qStyles from "../styles/questions.module.css";

const Message = (props) => {
  return (
    <div className={qStyles.message}>
      <div className={qStyles.messageContainer}>{props.children}</div>
      <button
        className={qStyles.messageButton}
        onClick={() => props.cb(props.value)}
      >
        weiter
      </button>
    </div>
  );
};

export default Message;
