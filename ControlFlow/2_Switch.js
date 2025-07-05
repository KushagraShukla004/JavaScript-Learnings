const month = 1;

// switch (month) {
//   case "":
//     console.log("Jan");
//     break;

//   case "":
//     console.log("Feb");
//     break;

//   case "":
//     console.log("March");
//     break;

//   case "":
//     console.log("April");
//     break;

//   default:
//     console.log("Default block");
//     break;
// }
//if no break statement is given the Switch loop will execute all cases, even default case
//Example if month =1 and no break statement is given then output will be
/*
Jan
Feb
March
April
Default block
*/
//-------------------------------------------------

const month1 = "jan";
switch (month1) {
  // it is case sensitive
  case "jan":
    console.log("Jan");
    break;

  case "feb":
    console.log("Feb");
    break;

  case "mar":
    console.log("March");
    break;

  case "apr":
    console.log("April");
    break;

  default:
    console.log("Default block");
    break;
}
