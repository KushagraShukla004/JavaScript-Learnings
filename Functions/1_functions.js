// function is a block of code defined with its own scope for re-usability and decrease redundancy

//declaration of function
function myFunc() {
  console.log("first function");
}
// calling a function
// myFunc(); //first function

//func can have parameters and arguments
// parameters :- at declaration
// arguments :- at calling

//parameters
function sum(num1, num2) {
  console.log(num1 + num2);
}
//arguments
// sum(3, 4); //7

// In JS, functions can be stored as a value as well
// let result = sum(2, 2);
// console.log(result);
// Output:
/**
4 //(because we had console.log() inside function which logged addition of 2+2 = 4)
undefined //(but since the function is not returning any value it gave us undefined)
 */
// Hence, for storing a "result" of a function we MUST return it
let result1 = function sum(num1, num2) {
  return num1 + num2;
};

// console.log(result1(1, 2)); //3

//###################################### multiple parameters ######################
// we can take multiple values as parameters using rest(...) operator (easiest and cleaner way)
// it returns multiple parameter values in an [array]

//NOTE: spread(...) operator and rest(...) operator are both DIFFERENT!!!!!
/**
| Syntax  |         Spread           |                 Rest               |
| --------| ------------------------ | ---------------------------------- |
| Used in | Function calls, literals | Function parameters, destructuring |
| Purpose | Expands values           | Gathers values                     |
| Example | `fn(...arr)`             | `function fn(...args)`             |

 */

let show = function display(...numbers) {
  return numbers;
};
// console.log(show(1, 2, 3, 4)); //[ 1, 2, 3, 4 ]

// Since , (...numbers) is in array then we can perform array operations in it
function sum(...numbers) {
  let add = 0;
  // for...of loop iterates over values of iterables like Array,strings,object etc
  for (let num of numbers) {
    add += num;
  }
  return add;
}

// console.log(sum(1, 2, 3, 4, 5));

function values(val1, val2, ...numbers) {
  return numbers;
}

// console.log(values(1, 2)); // [] because 1,2 is stored in val1,val2 but we are returning only numbers which is empty
// console.log(values(1, 2, "a", "b")); //[ 'a', 'b' ] (notice in numbers we have stored string because JS is dynamically typed)

//###############################################################################################################

// we can also store Objects as parameter and argument of a function

let product = {
  name: "Mobile",
  price: 12000,
};
let product1 = {
  name: "Earphones",
  price: 1000,
};

function welcome(details) {
  // NOTE we will use details for accessing object key-value pairs because this "details" function can have different objects as their value not just specific "product" only. Hence, if we use this function to store other objects like product1,product2 etc . we dont have to access it again and again like product1.name,product2.name etc we will just keep it as details.name.
  // We just have to make sure the "key" name is same.
  return `Product: ${details.name}, Price: ${details.price} `;
}

console.log(welcome(product)); //Product: Mobile, Price: 12000
console.log(welcome(product1)); //Product: Earphones, Price: 1000

//Hence, by using a single function with single object calling we can access multiple object key-value pairs
//##########################################################################################################
