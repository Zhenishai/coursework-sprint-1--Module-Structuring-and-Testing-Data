
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error.

// =============> The code will fail because we cannot use a number (3) as a function parameter name.Inside the function,used num,
//  but there is no variable named num, so even if the function definition were valid, it would still cause an error

function square(3) {
    return num * num;
}

// =============> write the error message here: it is the SyntaxError: Unexpected number,and after running- ReferenceError: num is not defined.

// =============> explain this error message here: JavaScript does not allow numbers as parameter names, so the function definition is invalid.
// Even inside the function, num is used but never defined.
// Because of these issues, JavaScript fails before the function can run.

// Finally, correct the code to fix the problem

// =============>function square(num) {return num * num;}console.log(square(3));

