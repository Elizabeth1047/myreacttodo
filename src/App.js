import React, { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Todolist from "./components/Todolist";
import "./App.css";
import Modal from "./components/Modal";
import Completedlist from "./components/Completedlist";
import Bubbles from "./components/Bubbles";

function App() {
  const [todo, setTodo] = useState("");
  const [todolist, setTodoList] = useState([]);
  const [showmodal, setShowmodal] = useState(false);
  const [Completed, setCompleted] = useState([]);
  const [modalContent, setModalContent] = useState("");
  const [contentIndex, setContentIndex] = useState();
  // console.log("object app component", todolist);
  return (
    <div className="App">
      {/* <Bubbles /> */}
      <div className="bottom">
        <Header />
        <Form
          todo={todo}
          setTodo={setTodo}
          todolist={todolist}
          setTodoList={setTodoList}
          setShowmodal={setShowmodal}
          showmodal={showmodal}
        />
        <Todolist
          todolist={todolist}
          setTodo={setTodo}
          Completed={Completed}
          setCompleted={setCompleted}
          setTodolist={setTodoList}
          setShowmodal={setShowmodal}
          setModalContent={setModalContent}
          setContentIndex={setContentIndex}
        />
        <Completedlist Completed={Completed} setCompleted={setCompleted} />
        {showmodal ? (
          <Modal
            setTodoList={setTodoList}
            setShowmodal={setShowmodal}
            prevValue={modalContent}
            prevLocation={contentIndex}
          />
        ) : null}
      </div>
    </div>
  );
}

export default App;
