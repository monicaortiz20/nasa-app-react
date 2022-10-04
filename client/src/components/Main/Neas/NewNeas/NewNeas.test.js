import React from "react";
import { shallow } from "enzyme";
import NewNeas from "./NewNeas";

describe("NewNeas", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<NewNeas />);
    expect(wrapper).toMatchSnapshot();
  });
});
