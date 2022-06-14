import { useCallback, useState } from "react";
import { ACTIVE, COMPLITED } from "../../statuses";
import Todo from "../Todo/Todo";
import "./TodoList.css";

const TodoList = () => {
  const [todos, setTodos] = useState(() => [
    {
      id: 1,
      text: "Hello",
      complited: true,
    },

    {
      id: 2,
      text: "Good Morning",
      complited: false,
    },

    {
      id: 3,
      text: "I'm John",
      complited: false,
    },
  ]);

  // const updateTodo = useCallback(
  //   (id) => {
  //     debugger
  //     todos.map(todo => {
  //       if (todo.id === id) {
  //         return {...todo, complited: !todo.complited}
  //       }
  //       return todo
  //     })
  //   },
  //   [todos],
  // );

  const updateTodo = (id) => {
    debugger;
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, complited: !todo.complited };
        }
        return todo;
      })
    );
  };

  const updateTodoMemoized = useCallback((id) => updateTodo(id), [todos]);

  return (
    <div className="todolist">
      <div className="todolist__header">Todo List</div>
      <div className="todolist__content">
        {todos.map((todo) => (
          <Todo todo={todo} updateTodo={updateTodoMemoized} />
        ))}
      </div>

      {todos ? (
        <div className="todolist__bottom">
          <div className="bottom__leftitems">
            <div>2</div>
            <div>items left</div>
          </div>

          <div className="bottom__groups">
            <div className="groups__item">All</div>
            <div className="groups__item">Active</div>
            <div className="groups__item">Complited</div>
          </div>

          <div className="bottom__clear">Clear complited</div>
        </div>
      ) : undefined}
    </div>
  );
};

export default TodoList;
