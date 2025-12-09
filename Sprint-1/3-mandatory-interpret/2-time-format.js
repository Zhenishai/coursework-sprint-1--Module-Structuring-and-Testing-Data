const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?

// b) How many function calls are there?

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

// e) What do you think the variable result represents? Can you think of a better name for this variable?

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer


//Answers:

//a) There are 6 variable declarations.
//b) Function calls are invoked with (). In this code:console.log(result) 
// Template literals like `${totalHours}:${remainingMinutes}:${remainingSeconds}` are not function calls, they are just string interpolation.
//c)% is the remainder operator.MovieLength % 60 gives the number of seconds left when dividing total seconds by 60.
//d)movieLength - remainingSeconds → removes leftover seconds to get a multiple of 60 (full minutes).Divide by 60 → converts total seconds to total minutes.
//e)The var result combines hours:minutes:seconds as a string.Represents the formatted duration of the movie.I would call it const movieTime.
//f) Works: for positive integers (seconds) it correctly converts to hours:minutes:seconds.

//Potential issues:
//If movieLength is 0 → works fine: 0:0:0.
//If movieLength is negative → may produce negative hours/minutes/seconds.
//If movieLength is not an integer → fractional seconds may cause unexpected results.