import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { shallow } from "enzyme";
import { indexRender } from "./index";

jest.mock("react-dom", () => ({ render: jest.fn() }));

describe("Application root", () => {
  let wrapper = shallow(<App load={true} />);
  it("should render without crashing", () => {
    const div = document.createElement("div");
    div.id = "root";
    document.body.appendChild(div);
    let spy = jest.spyOn(ReactDOM, "render");
    expect(spy).toHaveBeenCalledTimes(0);
  });
  expect(wrapper).toBeDefined();
  expect(wrapper).toMatchSnapshot();
  // expect(wrapper.find("#close")).toBeDefined();

  it("should render", () => {
    let renderSpy = jest.spyOn(ReactDOM, "render");
    indexRender();
    expect(renderSpy).toHaveBeenCalled();
  });
});
