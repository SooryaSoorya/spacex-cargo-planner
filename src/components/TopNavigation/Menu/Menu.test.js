import React from "react";
import { shallow, mount, configure } from "enzyme";
import Menu from "./Menu";
const onSubmitSpy = jest.fn();
let mockFn = jest.fn();
const initialProps = {
  open: "",
  onClick: mockFn,
  saveHandler: mockFn,
  loadHandler: mockFn,
};

describe("<Menu component />", () => {
  it("Menu should render", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Menu {...initialProps} />);
    });
    afterEach(() => {
      wrapper.unmount();
    });
  });
});
