// map  MOST IMPORTANT AND USED in REACT

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNumbers.map((num) => num + 10);

// console.log(newNums);
/*
[
  11, 12, 13, 14, 15,
  16, 17, 18, 19, 20
]
*/

//######################### method chaining ##########################################

// using two or more methods together

const newNums = myNumbers
  .map((num) => num * 10) // [10,20,30,40,50,60,70,80,90,100]
  .map((num) => num + 1) // [11,21,31,41,51,61,71,81,91,101]
  .filter((num) => num >= 50); //[51,61,71,81,91,101]

console.log(newNums); // [51,61,71,81,91,101]
