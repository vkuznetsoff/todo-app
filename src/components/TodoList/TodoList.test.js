
import { render, screen } from '@testing-library/react'
import { act, create } from 'react-test-renderer';
import Todo from '../Todo/Todo';
import TodoList from "./TodoList";



describe("Testing TodoList component", () => {

  it("Renders <TodoList /> component", () => {
    render(<TodoList />);
    expect(screen.getByText("Todo List")).toBeInTheDocument();
    });

    it("Display todos from state", () => {
        let component 
        act(() => {
             component = create(<TodoList /> )
        })
        const instance = component.root
        
        act(() => {
            let todosLength = instance.props.todos.length
       })
            

        const todos = instance.findAllByType(Todo)
        expect(todos.length).toBe(todosLength);
    // expect(testInstance.findByProps({className: "sub"}).children).toEqual(['Sub']);
    })

   

  });
