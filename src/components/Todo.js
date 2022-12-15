import Completedlist from "./Completedlist";
import style from "../style.module.css";
import Modal from "./Modal";

const Todo = ({
  onetodo,
  showmodal,
  setShowmodal,
  setTodo,
  Completed,
  setCompleted,
  todolist,
  index,
  setTodolist,
  setModalContent,
  setContentIndex,
}) => {
  function handleedit() {
    setShowmodal((showmodal = true));
    const foundTodo = todolist.find((list) => list == onetodo);
    setModalContent(() => foundTodo);
    setContentIndex(() => index);
  }

  function handledelete() {
    setTodolist((todolist) => todolist.filter((t) => t !== onetodo));
  }

  function handlecompleted() {
    handledelete();
    setCompleted([...Completed, onetodo]);
  }

  return (
    <div className={style.eachlist}>
      <h3>{onetodo}</h3>
      <button onClick={handleedit} className={style.formbtn}>
        edit
      </button>
      <button onClick={handledelete} className={style.formbtn}>
        delete
      </button>
      <button onClick={handlecompleted} className={style.formbtn}>
        completed
      </button>
    </div>
  );
};

export default Todo;
