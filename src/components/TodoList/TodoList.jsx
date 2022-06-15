import { useCallback, useState } from "react";
import { ACTIVE, ALL, COMPLITED } from "../../statuses";
import Todo from "../Todo/Todo";
import uniqid from "uniqid"

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
  const complitedCount = todos.filter(todo => todo.status === COMPLITED).length

  const updateTodo = (id) => {

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
    border: "0.5px solid gray",
    borderRadius: "10px",
    background: "grey",
    color: "antiquewhite"
  }

  const [text, setText] = useState("")

  const addTodo = (text) => {
    setTodos([...todos, { id: uniqid(), text: text.trim(), status: ACTIVE }])
    setText("")
  }
  const inputImg = () => {
    if (text.trim()) {
      addTodo(text)
    }
  }

  const inputTextarea = (e) => {
    if (e.key === "Enter" && text.trim()) {
      addTodo(text)
    }
  }

  return (
    <div className="todolist">
      <div className="todolist__header">Todo List</div>

      <div className="content_inputblock">
        <div className="content_textarea">
          <img src={arrow} alt="arrow" onClick={inputImg} />
          <textarea name="textarea" placeholder="What needs to be done?"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => inputTextarea(e)}></textarea>
        </div>

      </div>

      <div className="todolist__content">

        {filteredTodos(todos).map((todo) => (
          <Todo key={todo.id} todo={todo} updateTodo={updateTodoMemoized} />
        ))}

        {complitedCount === 0 && group === COMPLITED ? <div className="content__comment">Нет завершенных заданий</div> : undefined}
        {activeCount === 0 && group === ACTIVE ? <div className="content__comment" >Нет активных заданий</div> : undefined}
        {todos.length === 0 && group === ALL ? <div className="content__comment" >Нет заданий</div> : undefined}
      </div>

      {todos ? (
        <div className="todolist__bottom">
          <div className="bottom__leftitems">
            <div> Активных:</div>
            <div className="bottom__leftitems_count">

              &nbsp;{activeCount}

            </div>
          </div>

          <div className="bottom__groups">
            <div className="groups__item" style={group === ALL ? activeItemStyle : undefined} onClick={displayAll}>
              Все
            </div>
            <div className="groups__item" style={group === ACTIVE ? activeItemStyle : undefined} onClick={displayActive}>
              Активные
            </div>
            <div className="groups__item" style={group === COMPLITED ? activeItemStyle : undefined} onClick={displayComplited}>
              Завершенные
            </div>
          </div>

          <div className="bottom__clear" onClick={clearComplited}>
            <div className="bottom__clear__text">
              Удалить завершенные
            </div>

          </div>
        </div>
      ) : undefined}
    </div>
  );
};

export default TodoList;
