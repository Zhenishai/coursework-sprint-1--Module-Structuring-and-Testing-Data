function isProperFraction(numerator, denominator) {
     return Math.abs(numerator) < denominator;
}
function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

const properFraction = isProperFraction(2, 3);
assertEquals(properFraction, true);
const improperFraction = isProperFraction(5, 2);
assertEquals(improperFraction, false);
const negativeFraction = isProperFraction(-4, 7);
assertEquals(negativeFraction, true);
const equalFraction = isProperFraction(3, 3);
assertEquals(equalFraction, false);
assertEquals(isProperFraction(0, 5), true);
assertEquals(isProperFraction(3, -5), true);

module.exports = isProperFraction;