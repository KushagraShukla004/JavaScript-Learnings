const score = 400;
// exclusively defining that we need Number ONLY
const scoreNew = new Number(400);

// console.log(scoreNew);
// console.log(scoreNew.toString());
//Frequently used .toFixed() decimal point kitne tak
// console.log(scoreNew.toFixed(2)); //400.00

const otherNumber = 1123.8966;
const otherNumber1 = 123.8966;

// console.log(otherNumber.toPrecision(3)); //23.9
// console.log(otherNumber.toPrecision(3)); //1.12e+3
// console.log(otherNumber1.toPrecision(3)); //124
// console.log(otherNumber.toPrecision(4)); //123.9

const hundreds = 10000000;
//To add (,) between zeros(default is US based so 1,000,000 )
// console.log(hundreds.toLocaleString()); //1,00,00,000
//to use indian standard (1,00,00,000)
// console.log(hundreds.toLocaleString("en-US")); //10,000,000

//BUT as u observe, u will see my by conversion was by default in 'en-IN' because
/*
The toLocaleString() method formats a number using the default locale of your runtime environment.
*/

//This will tell you what locale your JavaScript engine is using by default.
/* 
console.log(Intl.NumberFormat().resolvedOptions().locale); // mine came 'en-IN' hence, my by default conversion was in Indian standard only i will have to use en-US for US standard
*/

//########################## Maths ###################

// console.log(Math);

//converts into absolute value(converts a number into a positive value)
// console.log(Math.abs(-4)); //4
// console.log(Math.abs(4)); //4
// console.log(Math.abs(-4.6)); //4.6
//Rounds of a value
// console.log(Math.round(4.6)); //5
// console.log(Math.round(4.3)); //4
//always round off to the bigger value (ghar ki ceiling!!)
// console.log(Math.ceil(4.3)); //5
// console.log(Math.ceil(4.0)); //4
// console.log(Math.ceil(4.1)); //5
//opposite of ceil is floor(ghar ki floor!!)
// console.log(Math.floor(4.9)); //4
// console.log(Math.floor(4.5)); //4
// console.log(Math.floor(4.1)); //4

// console.log(Math.min(3, 2, 5, 6, 1)); //1
// console.log(Math.max(3, 2, 5, 6, 1)); //6

//Important - Math.random() the random value are always between 0-1 i.e.,

// console.log(Math.random()); //0.9847207238779316 or 0.19259553722432243 or 0.5747562228336334 etc

//But for getting random values like for DICE 1-6 we need something extra
//like if we do : random()*10 = 0.57*10=5.7
// console.log(Math.random() * 10); //2.1918161814883574
// but this time it came 0.38 since the original value was 0.0383872965314307608
// console.log(Math.random() * 10); //0.3872965314307608

//so to avoid that we add (1) to whole number so 0 never comes
// console.log(Math.random() * 10 + 1); //4.300692871064246
//but we need an int not decimal so either we can do Math.round(1) or Math.floor() to get the minimum value

// console.log(Math.round(Math.random() * 10 + 1)); //8
// console.log(Math.floor(Math.random() * 10 + 1)); //4

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1))); //6
//it can 6 but we want >10 so we can + total number with min so it is always >10
console.log(Math.floor(Math.random() * (max - min + 1) + min)); //16
