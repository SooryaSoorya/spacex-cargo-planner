import React from "react";
import { shallow, mount, configure } from "enzyme";
import CargoList from "./CargoList";
import { Link } from "react-router-dom";
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

describe("<CargoList component />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CargoList {...initialProps} />);
  });
  afterEach(() => {
    wrapper.unmount();
  });
});

describe("should render elements CargoList ", () => {
  const listView = shallow(<CargoList {...initialProps} />);
  it("renders the links", () => {
    let link = listView.find(Link);
    expect(link).toBeTruthy();
  });
});
