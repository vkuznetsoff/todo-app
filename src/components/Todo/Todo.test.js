
import "@testing-library/react";
import '@testing-library/jest-dom';
import { create } from "react-test-renderer";
import { ACTIVE } from "../../statuses";
import Checkbox from "../Checkbox/Checkbox";
import Todo from "./Todo";

const todos = [
    {
        id: 1,
        text: "Test text",
        status: ACTIVE
    }
]
describe("Todo component", () => {
    
    it("Component get todo in props defined", () => {
        const component = create(<Todo todo={todos[0]} /> )

        const root = component.root

        expect(root.props.todo).toBeDefined()
    })

    it("Todo display Checkbox from props", () => {
        const component = create(<Todo todo={todos[0]} /> )
        const instance = component.root
        expect(instance.findByType(Checkbox)).toBeTruthy();
// expect(testInstance.findByProps({className: "sub"}).children).toEqual(['Sub']);
    })

    
})