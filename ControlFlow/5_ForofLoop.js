// for of used mainly for iterables(array,objects,strings etc)

// const arr = [1, 2, 3, 4, 5];

// for (const arrElement of arr) {
//   console.log(arrElement);
// }
/*
1
2
3
4
5 
*/

// const greetings = "Hello World";
// for (const char of greetings) {
//   console.log(char);
// }
/*
H
e
l
l
o
 
W
o
r
l
d
 */

//if i dont want spaces in my char then we can use continue or break statement(if i want char before spaces only)
// for (const char of greetings) {
//   if (char === " ") {
//     continue;
//   }
//   console.log("char: ", char);
//}
/* 
char:  H
char:  e
char:  l
char:  l
char:  o
char:  W
char:  o
char:  r
char:  l
char:  d
*/

// for (const char of greetings) {
//   if (char === " ") {
//     break;
//   }
//   console.log("char: ", char);
// }
/*
char:  H
char:  e
char:  l
char:  l
char:  o
*/

//====================================================
// The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.
//It doesnt store duplicates!!!
// const map = new Map();
// map.set("IN", "India");
// map.set("USA", "United States of America");
// map.set("FR", "France");
// map.set("FR", "France");

// console.log(map);
/*
Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'FR' => 'France'
}
*/

//it didnt add duplicate 'FR' key value

//To iterate and print map values in string
// for (const key of map) {
//   console.log(key);
// }
/*
[ 'IN', 'India' ]
[ 'USA', 'United States of America' ]
[ 'FR', 'France' ]
*/
//OH OH !! its still in array !!

// for correct printing of map in string we use something called map destructuring because we see for of loop converted and stored "map" in "key" as an array

// for (const [key, value] of map) {
//   console.log(`${key} :- ${value}`);
// }
/*
IN :- India
USA :- United States of America
FR :- France
 */

// CAN BE USED in "<Select></Select>" for storing all <option></option> dropdown menu

// const newObject = {
//   game1: "NFS",
//   game2: "Diablo",
// };

// for (const [key, value] of newObject) {
//   console.log(`${key} :- ${value}`);
// }
//error typeError: newObject is not iterable
//Hence , object is NOT iterable like map

//####################################################

// for object iteration we use new loop called
// For in loop

// const newObject = {
//   game1: "NFS",
//   game2: "Diablo",
//   game3: "Road Rash",
//   game4: "FIFA 25",
// };

// for (const key in newObject) {
//   console.log(`${key} :- ${newObject[key]}`);
// }
/*
game1 :- NFS
game2 :- Diablo
game3 :- Road Rash
game4 :- FIFA 25
 */

//################################################
// For in loop for Map()

for (const key in map) {
  console.log(`${key} in map `);
}
// No output
/**
 for...in does NOT work on Map
Not because Map is non-iterable — it IS iterable —
But because for...in is for enumerating keys of plain objects, not iterable structures like Map.
 */
//###################################################

// BUT in "for..in" Loop we get only keys so in array keys are index and index is int and starts from 0
// const arr1 = ["ab", "bc", "dc"];
// for (const key in arr1) {
//   console.log(`${key} for arr1`);
// }
/**
0 for arr1
1 for arr1
2 for arr1
 */
