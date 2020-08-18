import React from "react";
import { configure, shallow } from "enzyme";
import App from "./App";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("app component", () => {
  const app = shallow(<App />);
  it("<App /> should render", () => {
    expect(app.exists()).toBe(true);
  });
});
