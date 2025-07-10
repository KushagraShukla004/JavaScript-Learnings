// filter

// const arr = ["Java", "JS", "Python", "Cpp", "Go"];

//we learned that we can use forEach to iterate through an array
// BUT
// Major thing about it is forEach DOES NOT return any Value
// const values = arr.forEach((item) => {
//   return item;
// });
// console.log(values); //undefined

//Then to return elements, or to do something or to conditionaly return elements we use filter()

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newArr = numArr.filter((num) => num > 4);
//if we use {} in arrow function we NEED to write return to return the values. (As we have talked in arrow funtions)
const newArr1 = numArr.filter((num) => {
  return num > 4;
});

// console.log(newArr); //[ 5, 6, 7, 8, 9, 10 ]
// console.log(newArr1); // [ 5, 6, 7, 8, 9, 10 ]

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

const userBooks = books.filter((bk) => bk.genre === "History");

// console.log(userBooks);
/*
[
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  },
  {
    title: 'Book Seven',
    genre: 'History',
    publish: 1986,
    edition: 1996
  }
]
*/

// const userBooks1 = books.filter((bk) => {
//   return bk.publish >= 2000;
// });
// console.log(userBooks1);
/*
[
  {
    title: 'Book Five',
    genre: 'Science',
    publish: 2009,
    edition: 2014
  },
  {
    title: 'Book Eight',
    genre: 'Science',
    publish: 2011,
    edition: 2016
  }
]
*/

//######################### MOST COMMON USE ####################

// filter is most commonly used in deleting elements like an object from an array of object

// How to delete a task from todo list task array

const todos = [
  { id: 1, task: "Buy groceries", completed: false },
  { id: 2, task: "Clean the house", completed: true },
  { id: 3, task: "Study JavaScript", completed: false },
];

const newTodo = todos.filter((todo) => todo.id != 2);
// here 'todo.id != 2' this statement means return only those element whose id is NOT 2 hence returning every object in array EXCEPT id=2. Hence, deleting that object from the array

console.log("newTodo:", newTodo);
/*
[
  { id: 1, task: 'Buy groceries', completed: false },
  { id: 3, task: 'Study JavaScript', completed: false }
]
*/

// !!!!!!!!!!!!!!!!!!! TO NOTE !!!!!!!!!!!!!!!!!!!!!!!!!!!!
/*
newTodo: [
  { id: 1, task: 'Buy groceries', completed: false },
  { id: 3, task: 'Study JavaScript', completed: false }
]
result: [
  { id: 1, task: 'Buy groceries', completed: false },
  { id: 3, task: 'Study JavaScript', completed: false }
]
*/

// If we observe the OUTPUT we can see the filter creates a new array and returns the copy array and DOES NOT modify the ORIGINAL ARRAY

//######################### IN REACT ###################

// In react we can do same thing but just create a function before return statement and then call it in the Button element

// function deleteTodoById(todos, idToDelete) {
//   return todos.filter((todo) => todo.id !== idToDelete);
// }

// const result = deleteTodoById(todos, 2);
// console.log("result:", result);

// ###################################################
