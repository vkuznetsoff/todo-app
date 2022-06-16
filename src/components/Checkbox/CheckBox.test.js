import { act, create } from "react-test-renderer";
import Checkbox from "./Checkbox";

describe("Checkbox component testing", () => {
    
      it("Renders Checkbox with COMPLITED todo", () => {
        let component
        act( () => {
            component = create(<Checkbox checkInit={true} /> )
        })
        const instance = component.root
        const images = instance.findAllByType('img')
        expect(images.length).toBe(2);         
      });

      it("Renders Checkbox with ACTIVE todo", () => {
        let component
        act( () => {
            component = create(<Checkbox checkInit={false} /> )
        })
        const instance = component.root
        const images = instance.findAllByType('img')
        expect(images.length).toBe(1);         
      });

      it("Testing onClick Checkbox", () => {
        let component
        act( () => {
            component = create(<Checkbox checkInit={false} /> )
        })
        const instance = component.root
        const images = instance.findAllByType('img')
        expect(images.length).toBe(1);         
      });
})
