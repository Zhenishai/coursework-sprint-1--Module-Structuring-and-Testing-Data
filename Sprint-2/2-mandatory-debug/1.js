// Predict and explain first...
//  =============> The output will be:The sum of 10 and 32 is undefined

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> the function returns before it reaches a + b.The return; line exits the function immediately with no value.
// Finally, correct the code to fix the problem
//  =============> function sum(a, b) {return a + b;}console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
