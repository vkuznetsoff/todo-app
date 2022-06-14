import { useState } from "react";
import { ACTIVE, COMPLITED } from "../../statuses";
import Todo from "../Todo/Todo";
import "./TodoList.css"

const TodoList = () => {
  const [todos, setTodos] = useState(() => (
    [
      {
        id: 1,
        text: "Hello",
        status: COMPLITED
      },

      {
        id: 2,
        text: "Good Morning",
        status: ACTIVE
      },

      {
        id: 2,
        text: "I'm John",
        status: ACTIVE
      }
    ]
  )) 

  return (
    <div className="todolist">
      <div className="todolist__header">Todo List</div>
      <div className="todolist__content">
        {todos.map(todo => (
          <Todo todo={todo} />
        ))}
        </div>
    </div>
  );
};

export default TodoList;
