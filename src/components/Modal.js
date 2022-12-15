import React from "react";
import { useState } from "react";
import style from "../style.module.css";

export default function ({
  setShowmodal,
  prevValue,
  prevLocation,
  setTodoList,
}) {
  const [editableInput, setEditableInput] = useState("");
  function handleeditf() {
    setShowmodal(false);
  }
  function handlechanges(e) {
    setEditableInput(e.target.value);
  }
  function handlesubmits(event) {
    console.log("hello");
    event.preventDefault();
    setShowmodal(false);
     setTodoList((prev) => [(prev[prevLocation] = editableInput)]);
  }

  return (
    <div className={style.modalbackground}>
      <div className={style.modalcontainer}>
        <p className={style.cancel} onClick={handleeditf}>
          X
        </p>
        <form onSubmit={handlesubmits}>
          <input
            type="text"
            placeholder="add todo"
            onChange={handlechanges}
            defaultValue={prevValue}
            className={style.input}
          />
          <button onClick={handlesubmits} className={style.formbtn}>
            edittodo
          </button>
        </form>
      </div>
    </div>
  );
}
