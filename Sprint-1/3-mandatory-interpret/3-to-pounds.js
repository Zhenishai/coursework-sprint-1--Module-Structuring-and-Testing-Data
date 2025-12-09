const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"

//Answers:

// Line 3-6 : Purpose: removes the trailing "p" from the string. -penceString.length - 1 → gets the index of the last character. - substring(0, lastIndex) → extracts all characters from the start up to but not including the last character.
// Line 8: Purpose: ensures the string has at least 3 characters, padding with "0" at the start if necessary.
//.padStart(3, "0") → if the string is shorter than 3 characters, it adds "0" at the beginning.
// Line 9-12 : Purpose: extracts the pounds part from the string. Logic: the last 2 digits are pence, the rest is pounds.
//substring(0, length - 2) → gets everything except the last 2 characters.
// Line 14-16: Purpose: extracts the pence part from the string.substring(length - 2) → last 2 characters of the string.
//.padEnd(2, "0") → ensures there are always 2 digits for pence.
// Line 18: Purpose: builds the formatted price string in pounds and prints it. Uses template literals to combine pounds and pence with "£" and ".".