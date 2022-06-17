import { render, screen } from "@testing-library/react";
import { create } from "react-test-renderer";
import Todo from "../Todo/Todo";

import TodoList from "./TodoList";

describe("Testing TodoList component", () => {
  it("Renders <Todolist /> component correctly", () => {
    render(<TodoList />);
    expect(screen.getByText("Todo List")).toBeInTheDocument();
  });

  it("Renders <Todolist /> with correct number of init Todos", () => {
    const component = create(<TodoList />);
    const instance = component.root;
    const todoList = instance.findAllByType(Todo);

    expect(todoList.length).toBe(3);
  });
});
