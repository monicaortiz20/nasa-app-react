import React from "react";
import { shallow } from "enzyme";
import ListNeas from "./ListNeas";

describe("ListNeas", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ListNeas />);
    expect(wrapper).toMatchSnapshot();
  });
});
