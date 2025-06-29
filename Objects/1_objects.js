// Two ways to declare objects:
/**
 * 1.constructor - which is a singleton (A singleton object is an object that is created only once in your application — and only one instance of it exists throughout the runtime.)

Example:
const singleton = {
  name: "I am the only one",
  log() {
    console.log(this.name);
  }
};

singleton.log(); // "I am the only one"


 * 2. literal (the normal way to create object using curly braces "{}"
 */

const mySym = Symbol("key1"); //this key1 is just a unique description like we have in html tag 'id'

const jsUser = {
  name: "Kushagra",
  age: 22,
  location: "Delhi",
  email: "kush@temp.com",
  isLoggedIn: false,
  ["last login days"]: ["Monday", "Saturday"],
  [mySym]: "key2",
};

// console.log(jsUser.email); //kush@temp.com
// console.log(jsUser["last login days"]); //[ 'Monday', 'Saturday' ]
// console.log(jsUser[mySym]); //key2

//If we want to "lock" an object so that noone can change the object values , then we can use Object.freeze(object_name)
// Object.freeze(jsUser);

// jsUser.email = "anything@mail";
// // console.log(jsUser.email); //email is still kush@temp.com
// console.log(jsUser); //{...(ignore),[Symbol(key1)]: 'key2'}

//########################### function as value in key-value pair object ###########################################
jsUser.func1 = function () {
  console.log("Hello user!");
};
/**
  const jsUser = {
  name: "Kushagra",
  age: 22,
  location: "Delhi",
  email: "kush@temp.com",
  isLoggedIn: false,
  ["last login days"]: ["Monday", "Saturday"],
  [mySym]: "key2",
  func1:function(){
    console.log("Hello user!");
  }
};
 */
// jsUser.func1();//Hello User! (because the func1 key contains function() which will run console.log("Hello User!"))

// OBSERVE CAREFULLY "jsUser.func1()" only RUNS console.log() that returns "Hello User!" but func1 itself DOESNT have a return value . Hence, func1 = undefined
// console.log("console logged:", jsUser.func1()); //console logged: undefined

//To fix console.log undefined we dont console.log("Hello User!") instead return "Hello User!" string itself

jsUser.func2 = function () {
  return "Hello USER2!";
};
/**
  const jsUser = {
  name: "Kushagra",
  age: 22,
  location: "Delhi",
  email: "kush@temp.com",
  isLoggedIn: false,
  ["last login days"]: ["Monday", "Saturday"],
  [mySym]: "key2",
  func1:function(){
    console.log("Hello user!");
  },
  func2:function(){
    return "Hello user!";
  }
};
 */
// console.log("console logged func2:", jsUser.func2()); //console logged func2: Hello USER2!

//###################################################################################################

//************************ To access value of the same object inside that object ******************/
// We use "this" keyword :- it used to access the values from same object reference

const jsUser2 = {
  name: "Kushagra",
  age: 22,
  location: "Delhi",
  email: "kush@temp.com",
  isLoggedIn: false,
  ["last login days"]: ["Monday", "Saturday"],
  [mySym]: "key2",
  func1: function () {
    console.log("Hello user!");
  },
  func2: function () {
    return "Hello user!";
  },
  func3: function () {
    return `Hello ${this.name}!`;
  },
};

console.log(jsUser2.func3());
