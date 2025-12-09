const getOrdinalNumber = require("./get-ordinal-number");

//Case1:1→1st
test("should return '1st'for 1", () => {
  expect(getOrdinalNumber(1)).toEqual("1st");
});
//Case2:2→2nd
test("should return '2nd'for 2", () => {
  expect(getOrdinalNumber(2)).toEqual("2nd");
});
//Case3:3→3rd
test("should return '3rd'for 3", () => {
  expect(getOrdinalNumber(3)).toEqual("3rd");
});
//Case4:4→4th
test("should return '4th' for 4", () => {
  expect(getOrdinalNumber(4)).toEqual("4th");
});
//Case5:11,12,13→special"th"rule
test("should return'11th','12th','13th' for 11, 12, 13", () => {
  expect(getOrdinalNumber(11)).toEqual("11th");
  expect(getOrdinalNumber(12)).toEqual("12th");
  expect(getOrdinalNumber(13)).toEqual("13th");
});

//Case6:21,22,23→normal rule applies
test("should return '21st','22nd','23rd'for 21, 22, 23", () => {
  expect(getOrdinalNumber(21)).toEqual("21st");
  expect(getOrdinalNumber(22)).toEqual("22nd");
  expect(getOrdinalNumber(23)).toEqual("23rd");
});

// Case7:101->101st
test("should return '101st' for 101", () => {
  expect(getOrdinalNumber(101)).toEqual("101st");
});
