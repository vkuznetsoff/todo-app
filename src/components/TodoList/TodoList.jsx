import { useCallback, useState } from "react";
import { ACTIVE, ALL, COMPLITED } from "../../statuses";
import Todo from "../Todo/Todo";

import arrow from "../../assets/img/arrow.svg"

import "./TodoList.css";
import Checkbox from "../Checkbox/Checkbox";

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

  const activeCount = todos.filter(todo => todo.status === ACTIVE).length

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

  const displayAll = () => {
    setGroup(ALL)
  };

  const displayActive = () => {
    setGroup(ACTIVE)
  };

  const displayComplited = () => {
    setGroup(COMPLITED)
  };

  const clearComplited = () => {
    setTodos(todos.filter(todo => todo.status !== COMPLITED))
  }

  const filteredTodos = (list) =>
    group !== "all" ? list.filter((todo) => todo.status === group) : list;

  const activeItemStyle = {
    border: "0.5px solid gray"
  }

  return (
    <div className="todolist">
      <div className="todolist__header">Todo List
        
      </div>
      <Checkbox />


      <div className="todolist__content">

        <div className="content_textarea">
          <img src={arrow} alt="arrow" />

          <textarea name="textarea" placeholder="What needs to be done?"></textarea>
        </div>

        {
          filteredTodos(todos).map((todo) => (
            <Todo todo={todo} updateTodo={updateTodoMemoized} />
          ))}
      </div>

      {todos ? (
        <div className="todolist__bottom">
          <div className="bottom__leftitems">
            <div className="bottom__leftitems_count">{activeCount}&nbsp;</div>
            <div> items left</div>
          </div>

          <div className="bottom__groups">
            <div className="groups__item" style={group === ALL ? activeItemStyle : undefined} onClick={displayAll}>
              All
            </div>
            <div className="groups__item" style={group === ACTIVE ? activeItemStyle : undefined} onClick={displayActive}>
              Active
            </div>
            <div className="groups__item" style={group === COMPLITED ? activeItemStyle : undefined} onClick={displayComplited}>
              Complited
            </div>
          </div>

          <div className="bottom__clear" onClick={clearComplited}>Clear complited</div>
        </div>
      ) : undefined}
    </div>
  );
};

export default TodoList;
