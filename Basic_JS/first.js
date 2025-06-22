//First Comment
/* First JS Study :- 
Operators */
let a = 10;
let b = 20;
console.log("a:", a, "b:", b);
console.log("Arithmetic Operators: ");
console.log("a+b =", a + b);
console.log("a-b =", a - b);
console.log("a*b =", a * b);
console.log("a**b =", a ** b);
console.log("a/b =", a / b);
console.log("a%b =", a % b);
console.log("a++ =", a++);
console.log("a =", a);
console.log("++a =", ++a);
console.log("b++ =", b++);
console.log("b =", b);
console.log("++b =", ++b);
console.log("Comparison Operators: ");
let c = 10;
let d = "10";
console.log("c:", c, "d:", d);
console.log("c == d:", c == d);
console.log("c === d:", c === d); //false because Data Type is different

//Conditional Statements

//If Statement
let age = 18;

console.log("If statement: ");
if (age > 18) {
  console.log("Adult");
}
if (age <= 18) {
  console.log("Not Adult");
}

//If-else Statement
console.log("If-else statement: ");
if (age > 18) {
  console.log("Adult");
} else {
  console.log("Not Adult");
}

//Else-if Statement
console.log("Else-If-else statement: ");
if (age < 13) {
  console.log("Kid");
} else if (age >= 13 && age <= 18) {
  console.log("Teen");
} else {
  console.log("Adult");
}

//Ternary Operators
console.log("Ternary Operator statement: ");
let result = age > 18 ? "adult" : "Not adult";
console.log(result);
