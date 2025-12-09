const getAngleType = require("./1-get-angle-type");

// Case1:Right angle
test("should identify right angle (90°)", () => {
  expect(getAngleType(90)).toEqual("Right angle");
});
// Case2:Acute angle
test("should identify acute angles (less than 90°)", () => {
  expect(getAngleType(45)).toEqual("Acute angle");
  expect(getAngleType(10)).toEqual("Acute angle");
});
// Case3:Obtuse angle
test("should identify obtuse angles (greater than 90° and less than 180°)", () => {
  expect(getAngleType(120)).toEqual("Obtuse angle");
  expect(getAngleType(135)).toEqual("Obtuse angle");
});
//Case4:Straight angle
test("should identify straight angles (exactly 180°)", () => {
  expect(getAngleType(180)).toEqual("Straight angle");
});
//Case5:Reflex angle
test("should identify reflex angles (greater than 180° and less than 360°)", () => {
  expect(getAngleType(270)).toEqual("Reflex angle");
  expect(getAngleType(359)).toEqual("Reflex angle");
});
