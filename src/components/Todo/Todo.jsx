import "./Todo.css"

const Todo = ({ todo }) => {
  const style = {
    textDecoration: "underline",
  };

  return (
    <div className="todo">
      <div className="todo__content">
        <input type="checkbox" className="round__checkbox"/>
        <div className="todo__text" style={style}>
          {todo.text}
        </div>
      </div>
    </div>
  );
};

export default Todo