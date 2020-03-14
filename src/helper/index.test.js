import { maxNumber } from "./index";

describe("maxNumber", () => {
  it("Should return 0 for empty array.", () => {
    expect(maxNumber([])).toEqual(0);
  });

  it("Should return max number when array is not empty", () => {
    expect(maxNumber([1, 2, 2, 3])).toEqual(3);
  });
});
