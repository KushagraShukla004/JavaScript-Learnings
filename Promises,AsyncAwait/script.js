//callback

// function sum(a, b) {
//   console.log(a + b);
// }

// function calculator(a, b, sumCallback) {
//   //sumCallback parameter is a callback which is calling sum function here
//   sumCallback(a, b);
// }
// calculator(a, b, sum);
//since, sum funtion is passed as an argument here for sumCallback parameter we don't use sum()

//Consise way

// function calculator(a, b, sum) {
//   sum(a, b);
// }

// //pass the sum function directly here
// calculator(a, b, () => {
//   console.log(a + b);
// });

//======================================================================

//Promises

// function getData(dataId, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data:", dataId);
//       resolve("success"); //will successfully return data
//       if (getNextData) {
//         getNextData;
//       }
//     }, 5000); //5000ms=5sec
//   });
// }

//====================================================================

//Practical use of Promise

// function asyncFunc1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data1");
//       resolve("Success");
//     }, 3000);
//   });
// }
// function asyncFunc2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data2");
//       resolve("Success");
//     }, 3000);
//   });
// }
/*-----------------------------------------------*/
// console.log("Fetching DATA1...");
// let p1 = asyncFunc1();
// p1.then((res) => {
//   console.log(res);
// });
// console.log("Fetching DATA2...");
// let p2 = asyncFunc2();
// p2.then((res) => {
//   console.log(res);
// });

//BUT OUTPUT is:
//FETCHING DATA1...
// Fetching DATA2...
// Data1
// Success
// Data2
// Success
/*-----------------------------------------------*/

//THIS IS CALLED PROMISE CHAINING
// console.log("Fetching DATA1...");
// let p1 = asyncFunc1();
// p1.then((res) => {
//   console.log(res);
//   console.log("Fetching DATA2...");
//   let p2 = asyncFunc2();
//   p2.then((res) => {
//     console.log(res);
//   });
// });

//PROMISE CHAINING

//OUTPUT IS:
// Fetching DATA1...
// Data1
// Success
// Fetching DATA2...
// Data2
// Success

//-------------------------------------------------
//CONCISED WAY
// console.log("Fetching DATA1...");
// asyncFunc1().then((res) => {
//   console.log("Fetching DATA2...");
//   asyncFunc2().then((res) => {});
// });

//OUTPUT IS:
// Fetching DATA1...
// Data1
// Fetching DATA2...
// Data2

/*---------------------------------------------*/

//=================================================================

// function getData(dataId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data:", dataId);
//       resolve("success"); //will successfully return data

//       //we wont need below statement for getting Next Data because of PROMISE CHAINING
//       // if (getNextData) {
//       //   getNextData;
//       // }
//     }, 1000); //2000ms=2sec
//   });
// }

// console.log("Data1");
// getData(1)
//   .then(() => {
//     return getData(2);
//   })
//   .then(() => {
//     return getData(3);
//   });
// // getData(1).then(() => {
// //   getData(2).then(() => {
// //     getData(3).then(() => {
// //       getData(4).then(() => {});
// //     });
// //   });
// // });

function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data:", dataId);
      resolve("success"); //will successfully return data
    }, 1000); //2000ms=2sec
  });
}

// Async-await
//await:- waits for the promise to be resolved first then only next data will get printed
async function getAllData() {
  // await getData(1);
  // await getData(2);
  // await getData(3);
  // await getData(4);

  //loop it
  for (let i = 1; i <= 5; i++) {
    console.log(`getting data${i}...`);
    await getData(i);
  }
}

// getAllData();

//Since we are unnecessarily creating a new function and then we have to call that function
//so in order to bypass this problem we use IIFE:Immediately Invoked Function Expression
//IIFE is an anonymous function i.e, with no name and can only be called one time
(async function () {
  //loop it
  for (let i = 1; i <= 5; i++) {
    console.log(`getting data${i}...`);
    await getData(i);
  }
})();
