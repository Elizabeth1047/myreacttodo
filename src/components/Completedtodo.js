import React from "react";
import style from "../style.module.css";

export default function Completedtodo({ completestodo, setCompleted }) {
  function handlecompleteed() {
    setCompleted((Completed) => Completed.filter((c) => c !== completestodo));
  }
  return (
    <div className={style.eachlist}>
      <h3>{completestodo}</h3>
      <button onClick={handlecompleteed} className={style.formbtn}>
        delete
      </button>
    </div>
  );
}
