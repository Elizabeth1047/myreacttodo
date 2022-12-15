import React from "react";
import style from "../style.module.css";
import Modal from "./Modal";

function Form({
  todo,
  setTodo,
  todolist,
  setTodoList,
  showmodal,
  setShowmodal,
}) {
  function handlechange(e) {
    setTodo(e.target.value);
    // console.log(todo);
  }
  function handlesubmit(event) {
    event.preventDefault();
    setTodoList([...todolist, todo]);
    // console.log(todolist.index);
    setTodo("");
  }

  return (
    <div className={style.form}>
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          placeholder="add todo"
          value={todo}
          onChange={handlechange}
          className={style.input}
        />
        <button type="submit" className={style.formbtn}>
          ADD
        </button>
      </form>
    </div>
  );
}

export default Form;
