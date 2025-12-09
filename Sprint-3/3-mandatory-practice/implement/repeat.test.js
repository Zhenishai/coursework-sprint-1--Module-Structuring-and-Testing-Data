const repeat = require("./repeat");

// Case1:Repeat string multiple times
test("should repeat the string count times", () => {
  expect(repeat("hello", 3)).toEqual("hellohellohello");
});
// Case2:Count of 1
test("should return original string if count is 1", () => {
  expect(repeat("hello", 1)).toEqual("hello");
});
// Case3:Count of 0
test("should return empty string if count is 0", () => {
  expect(repeat("hello", 0)).toEqual("");
});
// Case4:Negative count
test("should throw error for negative count", () => {
  expect(() => repeat("hello", -2)).toThrow("Count cannot be negative");
});
