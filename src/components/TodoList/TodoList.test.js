
import { render, screen } from '@testing-library/react'
import { act, create } from 'react-test-renderer';
import TodoList from "./TodoList";



describe("Testing TodoList component", () => {
  it("Renders <TodoList /> component", () => {
    render(<TodoList />);
    expect(screen.getByText("Todo List")).toBeInTheDocument();
    });

   

  });
