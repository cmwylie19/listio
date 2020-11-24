import AddTodo from "./AddTodo";
import { shallow, mount } from "enzyme";

let wrapper;
let handleAddTodo = jest.fn();
let handleSetValue = jest.fn();
beforeEach(() => {});

const mockFunction = jest.fn();

describe("AddTodo Test", () => {
  it("should mount", () => {
    const wrapper = shallow(<AddTodo handleAddTodo={handleAddTodo} />);
    expect(wrapper).toBeDefined();
    wrapper.unmount();
  });

  it("should call mockFunction on button click", () => {
    const wrapper = shallow(<AddTodo handleAddTodo={handleAddTodo} />);
    wrapper
      .find("button")
      .first()
      .simulate("click");
    expect(handleAddTodo).toHaveBeenCalled();
    wrapper.unmount();
  });

  it("should call mockFunction on button click", () => {
    const wrapper = shallow(<AddTodo handleAddTodo={handleAddTodo} />);
    console.log(JSON.stringify(wrapper));
    wrapper
      .find("input")
      .first()
      .simulate("keydown", { value: 22 });
    wrapper.unmount();
  });
});
