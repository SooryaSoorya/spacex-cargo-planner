import React from "react";
import { shallow, mount, configure } from "enzyme";
import CargoInfo from "./CargoInfo";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
const initialProps = {
  data: [
    {
      id: "d3ff0c68892",
      name: "Amazon.com",
      email: "contact@amazon.com",
      boxes: "6.8,7.9,3",
    },
    {
      boxes: "3.3,3,3.2,1.6,5.4,2.1,2.7,4.6",
      email: "contact@walmart.com",
      id: "e40b72",
      name: "Walmart",
    },
  ],
  searchTerm: "",
};
const onSubmitSpy = jest.fn();

describe("<CargoInfo component />", () => {
  it("CargoInfo should render", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(
        <CargoInfo {...initialProps} saveHandler={onSubmitSpy} />
      );
    });
    afterEach(() => {
      wrapper.unmount();
    });
  });
});
