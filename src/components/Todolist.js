import React from "react";
import Todo from "./Todo";
import Modal from "./Modal";
import style from "../style.module.css";

function Todolist({
  todolist,
  showmodal,
  setShowmodal,
  setTodo,
  Completed,
  setCompleted,
  setTodolist,
  setModalContent,
  setContentIndex,
}) {
  return (
    <div className={style.list}>
      <h1 className={style.todohead}>MY TODO</h1>
      {todolist.map((onetodo, index) => (
        <div key={index}>
          <Todo
            className={style.eachlist}
            onetodo={onetodo}
            showmodal={showmodal}
            setShowmodal={setShowmodal}
            setTodo={setTodo}
            setTodolist={setTodolist}
            Completed={Completed}
            index={index}
            setCompleted={setCompleted}
            todolist={todolist}
            setModalContent={setModalContent}
            setContentIndex={setContentIndex}
          />
        </div>
      ))}
    </div>
  );
}

export default Todolist;
