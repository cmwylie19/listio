import Todo from "./Todo";
import { shallow } from "enzyme";

let wrapper;
let handleDeleteTodo = jest.fn();
let handleToggleTodo = jest.fn();
let title = "test";
let id = 0;
let done = false;
beforeEach(() => {});

const mockFunction = jest.fn();

describe("AddTodo Test", () => {
  it("should mount", () => {
    const wrapper = shallow(
      <Todo
        title={title}
        id={id}
        handleToggleTodo={handleToggleTodo}
        handleDeleteTodo={handleDeleteTodo}
      />
    );
    expect(wrapper).toBeDefined();
    wrapper.unmount();
  });

  it("should call mockFunction on button click", () => {
    let mockHandleDeleteTodo = jest.fn();
    let mockHandleToggleTodo = jest.fn();

    const wrapper = shallow(
      <Todo
        title={title}
        id={id}
        handleToggleTodo={mockHandleToggleTodo}
        handleDeleteTodo={mockHandleDeleteTodo}
      />
    );
    wrapper
      .find("#delete-button")
      .first()
      .simulate("click");
    expect(mockHandleDeleteTodo).toHaveBeenCalled();
    wrapper.unmount();
  });

  it("should call mockFunction on input click", () => {
    let mockHandleDeleteTodo = jest.fn();
    let mockHandleToggleTodo = jest.fn();

    const wrapper = shallow(
      <Todo
        title={title}
        id={id}
        handleToggleTodo={mockHandleToggleTodo}
        handleDeleteTodo={mockHandleDeleteTodo}
      />
    );
    wrapper
      .find("#checkbox")
      .first()
      .simulate("change", { value: 22 });
    expect(mockHandleToggleTodo).toHaveBeenCalled();
    wrapper.unmount();
  });
});
