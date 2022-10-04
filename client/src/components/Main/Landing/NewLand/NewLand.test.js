import React from "react";
import { shallow } from "enzyme";
import NewLand from "./NewLand";

describe("NewLand", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<NewLand />);
    expect(wrapper).toMatchSnapshot();
  });
});
