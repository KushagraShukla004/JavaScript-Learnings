// console.log(2>1); // easy true
// console.log("2" > 1); // ALSO true!!!
// console.log("2" >= 1); // THIS AS WELL true!!!
//JS automatically converts DTs to same DT they are comparing with

// (here we are comparing string with number) so JS converted string("2") to number(2)

//####################################################
// console.log(null > 0); // false
// console.log(null == 0); // false
// console.log(null >= 0); // true
// Since, as we have seen above ,
// we are comparing null(object) with number so JS converts null=>0 . Hence, (null>0)=false BUT (null>=0) = true because 0=0

//####################################################

console.log(undefined == 0); // false
console.log(undefined >= 0); // false
console.log(undefined > 0); // false
