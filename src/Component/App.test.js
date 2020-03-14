import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import "../setupTests";

describe("App", () => {
  let id = 1;
  const app = shallow(<App />);
  it("should render App component", () => {
    expect(app).toMatchSnapshot();
  });

  it("should initilize `state` with initial empty array", () => {
    expect(app.state().gifts).toEqual([]);
  });

  describe("When clicking on `add-gift` button", () => {
    beforeEach(() => {
      app.find(".add-gift").simulate("click");
    });

    afterEach(() => {
      app.setState({ gifts: [] });
    });
    it("should update the `state` when `add gift` button is clicked", () => {
      expect(app.state().gifts).toEqual([{ id: 1 }]);
    });

    it("should addd gift item in rendered list when user clicks on add button", () => {
      expect(app.find(".gift-list").children().length).toEqual(1);
    });

    it("should add gift form", () => {
      expect(app.find("Gift").exists()).toBe(true);
    });
  });
  describe("when removing gift", () => {
    beforeEach(() => {
      app.instance().removeGiftHandler(id);
    });

    it("removes the gift from state", () => {
      expect(app.state()).toEqual({ gifts: [] });
    });
  });
});
