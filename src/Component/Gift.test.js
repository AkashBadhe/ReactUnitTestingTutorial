import React from "react";
import { shallow } from "enzyme";
import Gift from "./Gift";
import { exportAllDeclaration } from "@babel/types";
describe("Gift", () => {
  const id = 1;
  const props = {
    gift: {
      id: id
    },
    removeGiftHandler: jest.fn()
  };
  const gift = shallow(<Gift {...props} />);
  it("renders properly", () => {
    expect(gift).toMatchSnapshot();
  });

  it("initialize person and present in `state`", () => {
    expect(gift.state()).toEqual({ person: "", present: "" });
  });

  describe("When typing into person input", () => {
    let personInputValue = "Uncle";
    beforeEach(() => {
      gift.find(".input-person").simulate("change", {
        target: { name: "person", value: personInputValue }
      });
    });

    it("Should update the person value in state.", () => {
      expect(gift.state().person).toEqual(personInputValue);
    });
  });

  describe("When typing into present input", () => {
    let present = "car";
    beforeEach(() => {
      gift.setState({ present: "", person: "" });
      gift
        .find(".input-present")
        .simulate("change", { target: { name: "present", value: present } });
    });
    it("should set the proper state value in present", () => {
      expect(gift.state().present).toEqual(present);
    });
  });

  describe("When clicking on remove Gift", () => {
    beforeEach(() => {
      gift.find(".btn-remove").simulate("click");
    });

    it("Should call remove gift handler", () => {
      expect(props.removeGiftHandler).toHaveBeenCalledWith(id);
    });
  });
  describe("Clicking on submit button", () => {
    beforeEach(() => {
      gift.find(".btn-submit").simulate("click");
    });
    it("should call the submitHandler", () => {
      expect(gift.instance().submitHandler).toBeDefined();
    });
  });
});
