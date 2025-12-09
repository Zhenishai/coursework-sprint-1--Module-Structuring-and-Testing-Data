// Predict and explain first...
//  =============>When I try to run this function, I will get an error. 

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============>Inside the function, str is already declared as a parameter.I cannot declare a new variable with let that has the same name as a parameter in the same scope
// =============> write your new code here
function capitalise(str) {  
 str = `${str[0].toUpperCase()}${str.slice(1)}`;  
 return str; 
}
console.log(capitalise(ddd))