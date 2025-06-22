//First Comment
/* First JS Study :- 
Operators */
let a = 10;
let b = 20;
// console.log("a:", a, "b:", b);
// console.log("Arithmetic Operators: ");
// console.log("a+b =", a + b);
// console.log("a-b =", a - b);
// console.log("a*b =", a * b);
// console.log("a**b =", a ** b);
// console.log("a/b =", a / b);
// console.log("a%b =", a % b);
// console.log("a++ =", a++);
// console.log("a =", a);
// console.log("++a =", ++a);
// console.log("b++ =", b++);
// console.log("b =", b);
// console.log("++b =", ++b);
// console.log("Comparison Operators: ");
// let c = 10;
// let d = "10";
// console.log("c:", c, "d:", d);
// console.log("c == d:", c == d);
// console.log("c === d:", c === d); //false because Data Type is different

// //Conditional Statements

// //If Statement
// let age = 18;

// console.log("If statement: ");
// if (age > 18) {
//   console.log("Adult");
// }
// if (age <= 18) {
//   console.log("Not Adult");
// }

// //If-else Statement
// console.log("If-else statement: ");
// if (age > 18) {
//   console.log("Adult");
// } else {
//   console.log("Not Adult");
// }

// //Else-if Statement
// console.log("Else-If-else statement: ");
// if (age < 13) {
//   console.log("Kid");
// } else if (age >= 13 && age <= 18) {
//   console.log("Teen");
// } else {
//   console.log("Adult");
// }

// //Ternary Operators
// console.log("Ternary Operator statement: ");
// let result = age > 18 ? "adult" : "Not adult";
// console.log(result);

// ***************** Operations *************

let value = 3;
let negValue = -value;

// console.log(negValue);

let str = "hello";
let str1 = " Kush";

// console.log(str + str1);
// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + "2");

/**********************************************************************************************/
// Something I LEARNED : comma operator(nothing new but heavily ignored) ONLY IN JAVASCRIPT
//The comma operator (,) evaluates both of its operands and returns the value of the last operand.
//USED in for loop(duh) but can be used anywhere and has interesting effects (so not recommended anywhere else other than for loop)

// (,) operator evaluates BOTH its operands but only returns the last executed event.

//it executes from left -> right like it always has so you would think the answer is 1+2=3,3+4=7 so 3,7 but it should be ONLY one value (3 or 7 or 10) but since there is no oprator to define what to do with 3,7 comma operator just returns the value of the last executed operation (i.e 3+4=7)
// Hence, output =7

let result = (1 + 2, 3 + 4);

console.log(result); //7

// BUT REMEMBER here , is not comma operator , its just argument separation using comma(,) for multiple arguments like we normally do.
console.log(1 + 2, 3 + 4); // 3 7

// IN for loop comma(,) is not argument separation BUT comma operation BECAUSE for loop return a single value
