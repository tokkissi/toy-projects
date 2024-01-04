const add = require("../src/add.js");

test("1더하기 2는 3", () => {
  expect(add(1, 2)).toBe(3);
});
