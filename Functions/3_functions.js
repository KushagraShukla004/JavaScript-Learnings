// Immediately Invoked Function Expressions (IIFE)

// Due to global scope pollution like variables , functions ,etc, we can get various errors . hence, to keep a function from getting invoked everywhere and only used when needed we use IIFE

// we know from previous 2_functions.js code that we can wrap a function inside () w/o writing 'return' statement. Hence

// (function one() {
//   console.log("Function One");
// });

//but now we need a way to call it because function needs to be called. Traditionally we call it by writing the function's name before () but here since we are already returning it there only then we can write something like this

//This is called named IIFE because we are using named function
(function one() {
  console.log("Function One");
})(); // Output: Function One
// DO NOT FORGET ';' HERE!!!!! because it marks the end of the function call. JS doesnt understand when to stop with IIFE

// We can do IIFE using arrow functions which is known as unnamed/anonymous IIFE
(() => {
  console.log("Function Arrow");
})(); //Function Arrow

//#########################################################################################################

// If we need a parameterized IIFE then do what we traditionally do in parameterized function ,i.e., use parameters and arguments. Only difference is we call arguments in ()(here) since 2nd bracket is used for calling

((name) => {
  console.log(`This is ${name}`);
})("Kush"); //This is Kush
