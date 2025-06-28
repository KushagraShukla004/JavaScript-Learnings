/*
JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC

- mdn docs
*/

let myDate = new Date();
// console.log(typeof myDate); //object
// console.log(myDate); //2025-06-28T08:30:03.999Z
// Returns exact date but in string for JSON
// console.log(myDate.toJSON()); // 2025-06-28T08:34:40.201Z

// console.log(myDate.toString()); // Sat Jun 28 2025 14:03:17 GMT+0530 (India Standard Time)

// console.log(myDate.toLocaleString()); // 28/6/2025, 2:04:08 pm

//Readable in Universal Coordinated Time(UTC)
// console.log(myDate.toUTCString()); // Sat, 28 Jun 2025 08:31:01 GMT

// //Returns only Date as a string
// console.log(myDate.toDateString()); // Sat Jun 28 2025

// explcitily defined date
let myCustomDate = new Date(2025, 0, 23); //in JS Months start from 0 (January) to 11(December) BUT ONLY IN THIS FORMAT since it is in array

// console.log(myCustomDate.toDateString()); //Thu Jan 23 2025

//Date(YYYY,MM,DD,HH,Min,seconds)
let myCustomDateTime = new Date(2025, 0, 23, 6, 20, 45);
// console.log(myCustomDateTime.toLocaleString()); // 23/1/2025, 6:20:45 am

//IN STRING way we start Jan with 01 only
let myCustomDateTime1 = new Date("2025-01-25");
// console.log(myCustomDateTime1.toLocaleString()); // 25/1/2025, 5:30:00 am

// MOST IMPORTANT DATE method
/* 
Sometimes used in APIs, tokens, or logs where time is measured in Unix timestamp format (seconds since epoch)

Common in JWT expiry,
*/
// let timeStamp = Date.now(); // gives time in milliseconds
//it means The number of milliseconds that have passed since the Unix Epoch (Jan 1, 1970, 00:00:00 UTC).

// console.log(timeStamp); //1751100189445 milliseconds
//1,751,100,189,445 milliseconds have passed since Jan 1, 1970
// Or ~55.5 years worth of milliseconds

// console.log(myCustomDateTime1.getTime()); //1737763200000
// let readable = new Date(1737763200000).toLocaleString();
// Output (in IST): "25/1/2025, 5:30:00 am"
// console.log(readable); //25/1/2025, 5:30:00 am

//in seconds
// console.log(myCustomDateTime1.getTime() / 1000); //1737763200
// console.log(Date)

let newDate = new Date();
//since in JS months start from 0 hence +1
// console.log(newDate.getMonth() + 1); // 6

console.log(
  newDate.toLocaleString("default", {
    // weekday: "narrow", // S
    // weekday: "short",// Sat
    weekday: "long", // Saturday
  })
);
