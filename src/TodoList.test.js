import TodoList from "./TodoList";
import { shallow } from "enzyme";

let wrapper;
let handleDeleteTodo = jest.fn();
let handleToggleTodo = jest.fn();
let title = "test";
let id = 0;
let done = false;
beforeEach(() => {});

const mockFunction = jest.fn();

describe("TodoList Test", () => {
  it("should mount", () => {
    const wrapper = shallow(
      <TodoList
        title={title}
        id={id}
        todos={[]}
        handleToggleTodo={handleToggleTodo}
        handleDeleteTodo={handleDeleteTodo}
      />
    );
    expect(wrapper).toBeDefined();
    wrapper.unmount();
  });

  it("should mount", () => {
    const wrapper = shallow(
      <TodoList
        title={title}
        id={id}
        todos={[{ id: 1 }, { id: 2 }]}
        handleToggleTodo={handleToggleTodo}
        handleDeleteTodo={handleDeleteTodo}
      />
    );
    expect(wrapper).toBeDefined();
    wrapper.unmount();
  });

  //   it("should call mockFunction on button click", () => {
  //     const wrapper = shallow(<AddTodo handleAddTodo={handleAddTodo} />);
  //     wrapper
  //       .find("button")
  //       .first()
  //       .simulate("click");
  //     expect(handleAddTodo).toHaveBeenCalled();
  //     wrapper.unmount();
  //   });

  //   it("should call mockFunction on button click", () => {
  //     const wrapper = shallow(<AddTodo handleAddTodo={handleAddTodo} />);
  //     console.log(JSON.stringify(wrapper));
  //     wrapper
  //       .find("input")
  //       .first()
  //       .simulate("keydown", { value: 22 });
  //     wrapper.unmount();
  //   });
});
