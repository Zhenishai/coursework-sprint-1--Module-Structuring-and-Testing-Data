let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

// c) Identify all the lines that are variable reassignment statements

// d) Identify all the lines that are variable declarations

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
 
//Answers

//a) There are 5 function calls (not counting the syntax error)
//b,c) An error is on the line 5-There is a missing comma between the arguments of replaceAll.
//d) A variable reassignment is when we assign a new value to an existing variable. There are lines 4,5.
//e)the porpuse of th expression Number is to turn a formatted string with commas into a proper numeric value so you can do arithmetic.
