// const userEmail = "kush";

// if (userEmail) {
//   console.log("Got user email");
// } else {
//   console.log("Don't have user email");
// }

//################### FALSY VALUES ######################

/*
1. false
2. 0 or -0
3. BigInt (0n)
4. empty strings("")
5. null
6. undefined
7. NaN
 */

//############## TRUTHY VALUES #######################

/*
1. "0", "false" (truth coz its not empty even string if it is 0 or false in the string)

2. " "(truth because there is a whitespace)
3. [],{} (truthy value)
4. function(){} (truthy value it is called empty function)
*/

// Hence, when we check if array is empty or not we check its length rather than seeing if array is empty or not . Example:

// let arr = [];

// This checks if `arr` exists and is truthy.
// In JavaScript, even an empty array (`[]`) is a truthy value.
// if (arr) {
//   console.log("Array has values");
// } else {
//   console.log("Array has no values");
// }

// Output:
// "Array has values"
// (Misleading — because although the array is empty,
// it's still truthy, so this block runs)

// The correct way to check if an array is actually empty:
// if (arr.length === 0) {
//   console.log("Array is empty");
// } else {
//   console.log("Array is not empty");
// }

// Output:
// "Array is empty"
// (This is the accurate check — because it evaluates
// the number of elements inside the array)

//------------------------------------------------
//To detect if object is empty
// const emptyObj = {};

//We first convert object keys into array by using Object.keys()
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const objToArray = Object.keys(emptyObj);
// console.log(objToArray); //[] (since the object is empty)
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//when it object is converted into array we can use the same method (.length === 0) to check whether object is empty or not
// if (Object.keys(emptyObj).length === 0) {
//   console.log("Object is empty");
// }

//-------------------------------------------
//Nullish Coalescing Operator(??)
//it works around null and undefined for type safety
//comes handy in safety checks for api response storing

let val1;
// val1 = 5 ?? 10; //5
val1 = null ?? 10; //10
val1 = undefined ?? 20; //20
val1 = undefined ?? null ?? 10; //10 (this is not a ternary operator)
val1 = 30 ?? null; //30
console.log(val1);
