// //Arrays
// let marks = [10, 20, 10, 40, 20];
// console.log(marks);
// let sum = 0;
// for (let mark of marks) {
//   console.log(mark);
//   sum += mark;
//   console.log("sum :", sum);
//   var avg = sum / marks.length;
// }
// console.log(`Average = ${avg}`);

// //Functions

// function Vowels(str) {
//   let count = 0;
//   console.log("string :", str);
//   for (let i of str) {
//     i = i.toLowerCase();
//     if (i == "a" || i == "e" || i == "i" || i == "o" || i == "u") {
//       count++;
//     }
//   }
//   console.log("Vowels: ", count);
// }

// Vowels("thIs Is HEllo");

// const vow = (str) => {
//   let count = 0;
//   console.log("string :", str);
//   for (let i of str) {
//     i = i.toLowerCase();
//     if (i == "a" || i == "e" || i == "i" || i == "o" || i == "u") {
//       count++;
//     }
//   }
//   return count; //return is must in arrow functions since it returns the result which gets assigned to variable const vow
// };

// console.log("vow :", vow("thIs Is HEllo"));

// let arr = [2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log("arr :", arr);
// // arr.forEach((val) => {
// //   console.log(val, ":", val * val);
// // });

// //OR
// // let calcSquare = (val) => {
// //   console.log(val, ":", val * val);
// // };

// // arr.forEach(calcSquare);

// // //MAP
// let newArr = arr.map((val) => {
//   return val * val;
// });

// console.log("newArr using map function:", newArr);

// // console.log(
// //   "arr.map(calcSquare); :",
// //   arr.map((val) => {
// //     return val * val;
// //   })
// // );

// let filteredArr = arr.filter((val) => {
//   return val % 2 == 0;
// });

// console.log("filteredArr using filter function:", filteredArr);

// let reducedArr = arr.reduce((prevVal, currVal) => {
//   return prevVal + currVal;
// });

// console.log("reducedArr using reduce function:", reducedArr);

// let arr = [9, 10, 2, 3, 4, 11, 5];
// console.log("arr :", arr);

// let reducedArr = arr.reduce((prev, curr) => {
//   return prev > curr ? prev : curr; // for smallest change prev<curr
// });

// console.log("reducedArr :", reducedArr);

// let marks = [90, 80, 70, 84, 95, 91, 92, 93, 95];

// console.log("marks :", marks);
// let filteredArr = marks.filter((val) => {
//   return val >= 90;
// });

// console.log("filteredArr :", filteredArr);

let num = prompt("Enter the number:");
let arr = [];
// for (let i = 0; i < num; i++) {
//   arr[i] = i; //0-9
// }
for (let i = 1; i <= num; i++) {
  arr[i - 1] = i; //1-10
}
console.log("arr :", arr);

let reducedArr = arr.reduce((prev, curr) => {
  return prev + curr; //1+2,3+4,7+5,12+6.....
});

console.log("reducedArr :", reducedArr);
