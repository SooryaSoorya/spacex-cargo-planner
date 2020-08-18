import React from "react";
import { shallow, mount, configure } from "enzyme";
import MenuItems from "./MenuItems";
const onSubmitSpy = jest.fn();
let mockFn = jest.fn();
const initialProps = {
  saveHandler: mockFn,
  loadHandler: mockFn,
};

describe("<MenuItems component />", () => {
  it("MenuItems should render", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<MenuItems {...initialProps} />);
    });
    afterEach(() => {
      wrapper.unmount();
    });
  });
});
