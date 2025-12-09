const countChar = require("./count");
//Multiple occurrences
test("should count multiple occurrences of a character", () => {
  const str = "aaaaa";
  const char = "a";
  expect(countChar(str, char)).toEqual(5);
});
//No occurrences
test("should return 0 when the character does not exist", () => {
  const str = "hello";
  const char = "x";
  expect(countChar(str, char)).toEqual(0);
});
//Case-sensitive check
test("should be case-sensitive", () => {
  const str = "aAaA";
  const char = "a";
  expect(countChar(str, char)).toEqual(2);
});