import React from "react";
import { shallow } from "enzyme";
import CardNeas from "./CardNeas";

describe("CardNeas", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CardNeas />);
    expect(wrapper).toMatchSnapshot();
  });
});
