import App from "./App";
import { shallow, mount } from "enzyme";

describe("AddTodo Test", () => {
  it("should mount", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toBeDefined();
    wrapper.unmount();
  });
});
