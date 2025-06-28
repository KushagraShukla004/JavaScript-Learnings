const marvel_heroes = ["thor", "ironman", "spiderman"];
const dc_heroes = ["superman", "batman", "flash"];

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes); //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'batman', 'flash' ] ]

// console.log(marvel_heroes.concat(dc_heroes)); // [ 'thor', 'ironman', 'spiderman', 'superman', 'batman', 'flash' ]

// Diff b/w push() & concat()
/**
 * arr.push(arr1) modifies original arr and pushes whole arr1 inside the arr 

 * arr.concat(arr1) copies and merges both array and returns a new array 
 */

/*********************************************************************************************************************/
//BEST WAY TO MERGE multiple arrays(MOST IMPORTANT)
//using spread operator(...variable)(ES6 (ES2015))
//"Spread" the elements of an iterable (like an array, string, or object) into individual elements or key-value pairs.

let spreadArr = [...marvel_heroes, ...dc_heroes];
console.log(spreadArr); //[ 'thor', 'ironman', 'spiderman', 'superman', 'batman', 'flash' ]
/*********************************************************************************************************************/

//#############################################################################################
// const newArr = [1, 2, 3, ["A", "B"], 4, 5, [6, 7, ["C", "D"]]];

// const flatArr = newArr.flat(2); //flat(depth)
// console.log(flatArr);
/*
[
  1,   2, 3, 'A', 'B',
  4,   5, 6, 7,   'C',
  'D'
]
*/

//############################# Important #############################################################
//using Array :- a global object (a built-in constructor function)

let val = "Kush";

// console.log(Array.from(val));//[ 'K', 'u', 's', 'h' ]

//using spread operator
console.log([...val]); // [ 'K', 'u', 's', 'h' ]
