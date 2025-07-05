//if statement

/*
Syntax:
if(condition){
 body
}
---------------------------------------------
if (true) {
  console.log("will always execute");
}
if (false) {
  console.log("will never execute");
}

Output:
will always execute
*/

//-------------Real-life Example---------------------
// let isUserloggedIn = true;
/*
if (!isUserloggedIn) {
    // Point: Because here not(!) of true is false hence the condition is false so the loop never runs4
    
    console.log("user logged in: ", isUserloggedIn); 
    //this never ran.
    }
    
    console.log("outside if loop", isUserloggedIn); //outside if loop true
    */
// but this is too lengthy for false statements hence we use else block

//    let isUserloggedIn = true;
// if (!isUserloggedIn) {
//   console.log("user logged in: ", isUserloggedIn);
// } else {
//   //else loop ran
//   console.log("outside if loop", isUserloggedIn); //outside if loop true
// }

//###############################

// const userLoggedIn = true;
// const debitCard = true;

// if (userLoggedIn && debitCard) {
//   console.log("Allow to buy course");
// }

// const loggedInFromGoogle = true;
// const loggedInFromEmail = false;
// if (loggedInFromGoogle || loggedInFromEmail) {
//   console.log("user logged in");
// }
