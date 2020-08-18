import React from "react";
import { shallow, mount, configure } from "enzyme";
import MenuToggle from "./MenuToggle";
const onSubmitSpy = jest.fn();
let mockFn = jest.fn();
const initialProps = {
  open: "",
  onClick: mockFn,
};

describe("<MenuToggle component />", () => {
  it("MenuToggle should render", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<MenuToggle {...initialProps} />);
    });
    afterEach(() => {
      wrapper.unmount();
    });
  });
});
