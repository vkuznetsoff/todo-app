import { fireEvent, getByTestId, render } from "@testing-library/react";
import "@testing-library/user-event";
import { act, create } from "react-test-renderer";
import Checkbox from "./Checkbox";

describe("Testing <Checkbox /> component", () => {
  it("Renders Checkbox with COMPLITED todo", () => {
    let component;
    act(() => {
      component = create(<Checkbox checkInit={true} />);
    });
    const instance = component.root;
    const images = instance.findAllByType("img");
    expect(images.length).toBe(2);
  });

  it("Renders Checkbox with ACTIVE todo", () => {
    let component;
    act(() => {
      component = create(<Checkbox checkInit={false} />);
    });
    const instance = component.root;
    const images = instance.findAllByType("img");
    expect(images.length).toBe(1);
  });

  it("Change checked status after click", () => {
    let component;
    act(() => {
      component = create(<Checkbox checkInit={false} updateTodo={() => {}} />);
    });
    const instance = component.root;
    const checkbox = instance.findByProps({ className: "checkbox" });
    act(() => checkbox.props.onClick());
    expect(checkbox.props.checked).toBeTruthy;
  });
});
