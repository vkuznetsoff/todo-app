import { useCallback, useState } from "react";
import { ACTIVE, ALL, COMPLITED } from "../../statuses";
import Todo from "../Todo/Todo";

import "./TodoList.css";

const TodoList = () => {
  const [todos, setTodos] = useState(() => [
    {
      id: 1,
      text: "Hello",
      status: COMPLITED,
    },

    {
      id: 2,
      text: "Good Morning",
      status: ACTIVE,
    },

    {
      id: 3,
      text: "I'm John",
      status: ACTIVE,
    },
  ]);

  const [group, setGroup] = useState(ALL); //active | complited | all

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
          return {
            ...todo,
            status: todo.status === COMPLITED ? ACTIVE : COMPLITED,
          };
        }
        return todo;
      })
    );
  };

  const updateTodoMemoized = useCallback((id) => updateTodo(id), [todos]);

  const displayAll = () => {};

  const displayActive = () => {};

  const displayComplited = () => {};

  const filteredTodos = (list) => 
    group !== "all" ? list.filter((todo) => todo.status === group) : list;

  return (
    <div className="todolist">
      <div className="todolist__header">Todo List</div>
      <div className="todolist__content">
        {
        filteredTodos(todos).map((todo) => (
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
            <div className="groups__item" onClick={displayAll}>
              All
            </div>
            <div className="groups__item" onClick={displayActive}>
              Active
            </div>
            <div className="groups__item" onClick={displayComplited}>
              Complited
            </div>
          </div>

          <div className="bottom__clear">Clear complited</div>
        </div>
      ) : undefined}
    </div>
  );
};

export default TodoList;
