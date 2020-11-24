import App from "./AddTodo";
import { shallow, mount } from "enzyme";

describe("AddTodo Test", () => {
  it("should mount", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toBeDefined();
    wrapper.unmount();
  });

  // it('should call mockFunction on button click', () => {
  //   const wrapper = shallow(<AddTodo handleAddTodo={handleAddTodo} />)
  //   wrapper.find("button").first().simulate("click")
  //   expect(handleAddTodo).toHaveBeenCalled();
  //   wrapper.unmount();
  // });

  // it('should call mockFunction on button click', () => {
  //   const wrapper = shallow(<AddTodo handleAddTodo={handleAddTodo} />)
  //   console.log(JSON.stringify(wrapper))
  //   wrapper.find("input").first().simulate("keydown",{value:22})
  //   wrapper.unmount();
  // });
});
