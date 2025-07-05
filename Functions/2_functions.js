// Arrow functions

// () => {}; // arrow functions

//Example:

const user = {
  username: "Kush",
  price: 999,

  welcome: function () {
    //this keyword refers to the currentcontext inside the scope of the function or object
    console.log(`${this.username}, welcome to website`);
    // console.log("this:", this);//this: { username: 'Kush', price: 999, welcome: [Function: welcome] }
  },
};

// user.welcome(); //Kush, welcome to website
// user.username = "Vyas";
// user.welcome(); //Vyas, welcome to website
// console.log("this:", this); //this: {}

//#########################IMPORTANT######################

//here in node when we do this it is empty
//BUTTTTTTTTTT
//when we log 'this' in browser we get ,
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}

//####################################################################################

//Two ways to write arrow functions which is using {} or () after the "=>"

// Below arrow function is called implicit arrow function because it implicitly returns the value and we dont have to write "return" for returning a value
const a = (x, y, str) => str + " " + (x + y);

// Below arrow function is called explicit arrow function because it explicitly returns the value by using a "return" statement for returning a value.
const b = (x, y, str) => {
  str + " " + (x + y);
};

// console.log("a returns:", a(2, 3, "a")); // a 5
// console.log("b returns:", b(2, 3, "b")); // undefined because we have not "return" a value in {}

//#############################################################################################################

// why to understand the diff b/w {} and () because:

//example api call
let apiResult = () => {
  user: "Kush";
};
let apiResult1 = () => {
  return { user: "Kush" };
};

// console.log(apiResult()); //undefined
// console.log(apiResult1()); //{ user: 'Kush' } because we have used return statement explicitly here.

//although apiResult1() works its too messy and can be optimised and cleaner  way by wrapping the object i.e {} inside ()

let apiResult2 = () => ({
  user: "Kush",
});

console.log(apiResult2()); //{ user: 'Kush' }
