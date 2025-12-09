// Predict and explain first...

// Predict the output of the following code:
// =============> All three console logs will print the same result, and it will always be the last digit of 103, because the function ignores its argument.

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
//The last digit of 42 is 3
//The last digit of 105 is 3
//The last digit of 806 is 3

// Explain why the output is the way it is
// =============> Function never uses the number being passed (42, 105, or 806). It always uses the global variable.
// So slice(-1) always takes the last digit of "103", which is "3"

// Finally, correct the code to fix the problem
// =============> function getLastDigit(num) {return num.toString().slice(-1)}


// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem

//The function must take a parameter so it can operate on the number you pass in.
//The global num variable is removed because it caused the function to ignore its inputs.
//Now getLastDigit(105) actually uses 105 and returns "5".
