"use strict"; //treat all JS code as newer version

// alert("hello"); // we would need borwser to run this but we are using nodejs cli

// Types of DataTypes

//PRIMITIVE DATATYPES
// number
// bigint
// string
// boolean
// null(its a standalone value as well)
// undefined
// symbol

// NON-PRIMITIVE DATATYPES
// object

// console.log(typeof null);
// console.log(typeof undefined);

// Type Conversion
let score = true;
let random = "100abc";

let inNumber = Number(score); //100
let randomNumber = Number(random);
// console.log(typeof score); //string
// console.log(typeof inNumber); //number
// console.log(typeof randomNumber); //number

// // BUT
// console.log(inNumber); // score=null, then inNumber=0 i.e its converting null DT into 0 (number DT)
// // if score = true then inNumber = 1 coz true = 1 and false = 0
// console.log(randomNumber); // NaN (not a Number) ???????

let isLoggedIn = 123.4;

let booleanIsLoggedIn = Boolean(isLoggedIn);

// console.log(booleanIsLoggedIn); // true
// if isLoggedIn="", boolean=false
// if isLoggedIn="asd", boolean=true
// hence, Empty string = false and something written = true

// undefined & null => false
// any number => true

//####################################

//All primitive DT are CALL BY Value i.e
// Call by value means that a copy of the value is passed to a variable or function — not the original.
// So, if you modify the value inside a function or assignment, it does not affect the original.

// Non-primitive types are Call By Reference i.e
// Opposite of Call by Value
// Means if you change the copy, the original is also affected
