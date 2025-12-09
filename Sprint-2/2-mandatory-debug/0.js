// Predict and explain first...

// =============>The message printed to the console will look strange.The result of multiplying 10 and 32 is undefined

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============>the multiply function logs the result but does not return anything.Functions without a return statement always return undefined.

// Finally, correct the code to fix the problem
//  =============> write your new code here: function multiply(a, b) {return a * b;}console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
