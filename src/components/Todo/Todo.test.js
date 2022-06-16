
import "@testing-library/react";
import '@testing-library/jest-dom';
import { create } from "react-test-renderer";
import { ACTIVE } from "../../statuses";
import Checkbox from "../Checkbox/Checkbox";
import Todo from "./Todo";

const todos = [
    {
        id: "1",
        text: "Test text",
        status: ACTIVE
    }
]
describe("Testing <Todo /> component", () => {
    
    it("Component get defined props", () => {
        const component = create(<Todo todo={todos[0]} updateTodo={()=> {}}/> )

        const root = component.root

        expect(root.props.todo).toBeDefined() 
        expect(root.props.updateTodo).toBeDefined()
    })


    it("Todo component display Checkbox from props", () => {
        const component = create(<Todo todo={todos[0]} /> )
        const instance = component.root
        expect(instance.findByType(Checkbox)).toBeTruthy();
    // expect(testInstance.findByProps({className: "sub"}).children).toEqual(['Sub']);
    })

    test("Display right text from props", () => {
        const component = create(<Todo todo={todos[0]} />);
        const instance = component.root;
        const text = instance.findByProps({className: "todo__text"});
        
        expect(text.props.children).toBe(todos[0].text);
      });



    
})