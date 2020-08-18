import React from "react";
import { shallow, mount, configure } from "enzyme";
import Modal from "./Modal";
const onSubmitSpy = jest.fn();
let mockFn = jest.fn();
const initialProps = {
  loading: "",
  error: "",
  message: "",
  onAgree: mockFn,
  onDrop: mockFn,
};

describe("<Modal component />", () => {
  it("Modal should render", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Modal {...initialProps} />);
    });
    afterEach(() => {
      wrapper.unmount();
    });
  });
});
