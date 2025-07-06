// array iteration Methods
// these loops are already present in "Prototype" object so we can call them by using dot(.)

//forEach(function(item, index,arr){})

const arr = ["Java", "JS", "Python", "Cpp", "Go"];

//function can be a named,anonymous or arrow . doesnt matter
// arr.forEach(function name(arrItem) {
//   console.log(arrItem);
// });
/*
Java
JS
Python
Cpp
Go
*/
//##################################################################################
//Using arrow function

// const arr1 = [5, 6, 4];
// let sum = 0;
// arr1.forEach((arrItem) => (sum += arrItem));
// console.log(sum); //15

//##################################################################
// more parameters in forEach()

// arr.forEach((item, index, arr) => {
//   console.log(item, index, arr);
//   /*
//     Java 0 [ 'Java', 'JS', 'Python', 'Cpp', 'Go' ]
//     JS 1 [ 'Java', 'JS', 'Python', 'Cpp', 'Go' ]
//     Python 2 [ 'Java', 'JS', 'Python', 'Cpp', 'Go' ]
//     Cpp 3 [ 'Java', 'JS', 'Python', 'Cpp', 'Go' ]
//     Go 4 [ 'Java', 'JS', 'Python', 'Cpp', 'Go' ]
//   */

//   console.log(`item : ${item}, index : ${index}, arr : ${arr}`);
//   /*
//     item : Java, index : 0, arr : Java,JS,Python,Cpp,Go
//     item : JS, index : 1, arr : Java,JS,Python,Cpp,Go
//     item : Python, index : 2, arr : Java,JS,Python,Cpp,Go
//     item : Cpp, index : 3, arr : Java,JS,Python,Cpp,Go
//     item : Go, index : 4, arr : Java,JS,Python,Cpp,Go
//   */

//   //that means ` ` string interopolation changes variables into string
// });

//##############################################################################

// iterating array of Objects using forEach()

const arrObject = [
  {
    name: "Kush",
    email: "kush@gmail.com",
  },
  {
    name: "Hemant",
    email: "hemant@gmail.com",
  },
  {
    name: "Arush",
    email: "arush@gmail.com",
  },
];

arrObject.forEach((item) => {
  console.log("item:", item);
  console.log("All names:", item.name);
});
/*
item: { name: 'Kush', email: 'kush@gmail.com' }
All names: Kush
item: { name: 'Hemant', email: 'hemant@gmail.com' }
All names: Hemant
item: { name: 'Arush', email: 'arush@gmail.com' }
All names: Arush
*/
