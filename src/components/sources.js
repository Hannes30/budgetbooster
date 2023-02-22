import Chart from "chart.js";
import Link from "next/link";
import React, { useRef, useEffect, useState } from "react";
import qStyles from "../styles/questions.module.css";

const Sources = (props) => {
  let [sources, setSources] = useState({});
  useEffect(() => {
    async function fetchData() {
      const data = await getSources();
      setSources(data);
    }
    fetchData();
  }, []);
  let objToRender = <div></div>;
  if (sources != {}) {
    if (sources[props.count] != undefined) {
      objToRender = "Quelle";
    }
  }
  async function getSources() {
    const response = await fetch("/api/sources");
    const data = await response.json();
    return data;
  }
  return (
    <div className={qStyles.sourceContainer}>
      <Link
        target="_blank"
        className={qStyles.source}
        href={sources[props.count] == undefined ? "#" : sources[props.count]}
      >
        {objToRender}
      </Link>
    </div>
  );
};

export default Sources;
