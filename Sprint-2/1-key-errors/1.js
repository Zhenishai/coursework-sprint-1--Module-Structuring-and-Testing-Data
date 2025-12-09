// Predict and explain first...

// Why will an error occur when this program runs?
// =============> JavaScript throws:ReferenceError: decimalNumber is not defined

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5; //This re-declares the same variable name, which is not allowed with const.
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);// decimalNumber has never been defined globally, only inside the function.

// =============>decimalNumber is used outside its scope.the variable decimalNumber is declared twice — once as a parameter and again as a const, which is also an error.

// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentage(0.5));
