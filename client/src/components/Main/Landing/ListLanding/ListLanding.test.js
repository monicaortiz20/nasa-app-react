import React from "react";
import { shallow } from "enzyme";
import ListLanding from "./ListLanding";

describe("ListLanding", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ListLanding />);
    expect(wrapper).toMatchSnapshot();
  });
});
