import React from "react";
import { shallow, mount, configure } from "enzyme";
import TopNavigation from "./TopNavigation";
const onSubmitSpy = jest.fn();
let mockFn = jest.fn();
const initialProps = {
  searchHandler: mockFn,
  saveHandler: mockFn,
  loadHandler: mockFn,
};

describe("<TopNavigation component />", () => {
  it("TopNavigation should render", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<TopNavigation {...initialProps} />);
    });
    afterEach(() => {
      wrapper.unmount();
    });
  });
});
