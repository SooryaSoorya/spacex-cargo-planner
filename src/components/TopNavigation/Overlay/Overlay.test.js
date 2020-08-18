import React from "react";
import { shallow, mount, configure } from "enzyme";
import Overlay from "./Overlay";
const onSubmitSpy = jest.fn();
let mockFn = jest.fn();
const initialProps = {
  open: "",
  onClick: mockFn,
};

describe("<Overlay component />", () => {
  it("Overlay should render", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Overlay {...initialProps} />);
    });
    afterEach(() => {
      wrapper.unmount();
    });
  });
});
