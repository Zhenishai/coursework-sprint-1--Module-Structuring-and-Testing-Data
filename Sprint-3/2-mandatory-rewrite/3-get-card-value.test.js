const getCardValue = require("./3-get-card-value");

//Case1:Ace
test("should return 11 for Ace of Spades", () => {
  expect(getCardValue("A♠")).toEqual(11);
});
//Case2:Number Cards (2-10)
test("should return correct value for number cards", () => {
  expect(getCardValue("5♥")).toEqual(5);
  expect(getCardValue("2♦")).toEqual(2);
  expect(getCardValue("10♣")).toEqual(10);
});
//Case3:Face Cards (J, Q, K)
test("should return 10 for face cards J, Q, K", () => {
  expect(getCardValue("J♣")).toEqual(10);
  expect(getCardValue("Q♦")).toEqual(10);
  expect(getCardValue("K♥")).toEqual(10);
});
//Case4:Ace again(to check consistency)
test("should return 11 for Ace of any suit", () => {
  expect(getCardValue("A♦")).toEqual(11);
  expect(getCardValue("A♥")).toEqual(11);
});
//Case5:Invalid Cards
test("should throw error for invalid card rank", () => {
  expect(() => getCardValue("1♠")).toThrow("Invalid card rank.");
  expect(() => getCardValue("B♣")).toThrow("Invalid card rank.");
});
