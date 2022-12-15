import React from "react";
import Completedtodo from "./Completedtodo";
import style from "../style.module.css";

export default function Completedlist({ setCompleted, Completed }) {
  return (
    <div className={style.list}>
      <h1>completed items</h1>
      {Completed.map((completestodo, index) => (
        <Completedtodo
          className={style.eachlist}
          completestodo={completestodo}
          setCompleted={setCompleted}
          key={index}
        />
      ))}
    </div>
  );
}
