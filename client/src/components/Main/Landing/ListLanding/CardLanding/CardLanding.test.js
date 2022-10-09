import React from "react";
import { shallow } from "enzyme";
import CardLanding from "./CardLanding";

describe("CardLanding", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CardLanding />);
    expect(wrapper).toMatchSnapshot();
  });
});
