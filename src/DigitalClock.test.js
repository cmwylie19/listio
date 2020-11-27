import React from "react";
import DigitalClock from "./DigitalClock";
import { shallow } from "enzyme";

describe("DigitalClock", () => {
  it("should render", () => {
    const wrapper = shallow(<DigitalClock />);
    expect(wrapper).toBeDefined();
  });
});
