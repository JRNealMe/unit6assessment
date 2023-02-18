const { shuffleArray } = require("./utils");

const shuffleCheck = (someArr) => {
  const returnedArr = shuffleArray(someArr);
  for (let i = returnedArr.length - 1; i > 0; i--) {
    if (returnedArr[i] !== someArr[i]) {
      return false;
    }
  }
  return true;
};

describe("shuffleArray should", () => {
  it("returns an array of the same lenth its sent in", () => {
    expect(shuffleArray([1, 2, 3, 4, 5]).length).toBe(5);
  });
  it("contains all of the same items", () => {
    const sameArr = [6, 7, 8, 9];
    expect(
      shuffleArray(sameArr).every((element) => {
        return sameArr.includes(element);
      })
    );
  });
  it("correctly shuffles items", () => {
    const someArr = [2, 4, 6, 8, 10, 12, 14, 16];
    expect(shuffleCheck(someArr)).toBe(false);
  });
});
