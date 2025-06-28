// array

const arr = [1, 2, 3, 4, 5, 6];
const myName = ["Kush", "Lakhan", "Arvind"];

// console.log(arr[3]);
// console.log(myName.length);

//Array methods

// console.log("arr.push(6)", arr.push(6)); //returns length of arr
// console.log(arr);
// console.log("myName.push(7)", myName.push(7)); //returns length of myName
// console.log(myName);
// console.log(arr.pop()); //returns the popped element from the array

/*
//insert element at the first which increases Time complexity due to all the elements shifting to right for insert the value at first
// arr.unshift(0);
*/
// arr.shift();//removes the first element

// console.log(arr.includes(9)); //false
// console.log(arr); //[ 1, 2, 3, 4 ]

// const newArr = arr.join();
// console.log(newArr); //1,2,3,4 (changed to string)
// console.log(typeof newArr); //string

// *************************Imp***********************
//slice,splice

console.log("A:", arr);

const slicedArr = arr.slice(1, 3); //slice(start,end)
console.log("slicedArr:", slicedArr); //[2,3]
console.log("B:", arr); //B: [ 1, 2, 3, 4, 5, 6 ]

const splicedArr = arr.splice(1, 3); //splice(start,end)
console.log("splicedArr:", splicedArr); //[2,3,4]
console.log("C:", arr); //C: [ 1, 5, 6 ]

//Difference b/w slice and splice
/*
Not Wrong but INCOMPLETE!!!!
slice(start,end) = in slice it doesnt take end(index) value 
splice(start,end) = in splice it does take end(index) value 
Not Wrong but INCOMPLETE!!!!!
*/

/*
Actual Difference:
in slice() it returns just the copy of the sub-array b/w that range(start,end excluded) WHILE
in splice() it modifies the actual array by removing and returning the sub-array UPTO that range(start,end included)
*/
