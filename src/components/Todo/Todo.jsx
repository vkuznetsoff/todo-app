import { COMPLITED } from "../../statuses";
import Checkbox from "../Checkbox/Checkbox";
import "./Todo.css";



const Todo = ({ todo, updateTodo }) => {
  const complitedStyle = {
    textDecoration: "line-through",
    opacity: "0.2"

  };

  return (
    <div className="todo">
      <div className="todo__content">
        {/* <input type="checkbox" checked={todo.status === COMPLITED ? true : false} className="round__checkbox" 
        onChange={() => updateTodo(todo.id)}/> */}

        <Checkbox checkInit={todo.status === COMPLITED ? true : false}
          style={{marginRight: "20px"}}
          // onClick={() => updateTodo(todo.id)} 
          id={todo.id}
          updateTodo={updateTodo}
          />

        <div className="todo__text" style={todo.status === COMPLITED ? complitedStyle : undefined}>
          {todo.text}
        </div>
      </div>
    </div>
  );
};


export default Todo;
