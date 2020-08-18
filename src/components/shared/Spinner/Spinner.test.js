import React from "react";
import { shallow, mount, configure } from "enzyme";
import Spinner from "./Spinner";

describe("<Spinner component />", () => {
  it("Spinner should render", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Spinner />);
    });
    afterEach(() => {
      wrapper.unmount();
    });
  });
});
