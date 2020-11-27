import AddTodo, {handleAdd} from "./AddTodo";
import { shallow, mount } from "enzyme";

let wrapper;
let handleAddTodo = jest.fn();
let handleSetValue = jest.fn();
beforeEach(() => {});

const mockFunction = jest.fn();

describe("AddTodo Test", () => {
  it('handleAdd should execute 2 functions',()=>{
    let firstFunction = jest.fn()
    let secondFunction = jest.fn().mockImplementation(()=>true);

    handleAdd(()=>firstFunction(), ()=>secondFunction());
    expect(firstFunction).toHaveBeenCalled();
    expect(secondFunction).toHaveBeenCalled()
  })
  it("should mount", () => {
    const wrapper = shallow(<AddTodo handleAddTodo={handleAddTodo} />);
    expect(wrapper).toBeDefined();
    wrapper.unmount();
  });

  it("should call mockFunction on button click", () => {
    const wrapper = shallow(<AddTodo handleAddTodo={handleAddTodo} />);
    wrapper
      .find("#addtodo-button")
      .first()
      .simulate("click");
    expect(handleAddTodo).toHaveBeenCalled();
    wrapper.unmount();
  });

  it("should call mockFunction on button click", () => {
    const wrapper = shallow(<AddTodo handleAddTodo={handleAddTodo} />);
    console.log(JSON.stringify(wrapper));
    wrapper
      .find("#input")
      .first()
      .simulate("keydown", { target: { value: 22 } });
    wrapper.unmount();
  });
});
