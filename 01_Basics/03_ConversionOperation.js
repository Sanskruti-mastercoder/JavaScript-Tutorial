// let score = 33 

// console.log(typeof score);
// console.log(typeof (score));

let score = "33Sans"

console.log(typeof score);
console.log(typeof (score));

// node 01_Basics/03_ConversionOperation.js

let valueInNumber = Number(score)
console.log(typeof valueInNumber);

console.log(valueInNumber);


// "33" ==> 33 
// "33sans" ==> NaN (not a number)
// true ==> 1 ; false ==> 0 

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn);

// 1 ==> true ; 0 ==> false
// Empty string ==> false ; Non empty string ==> true 

let someNumber = 23 

let stringSomeNumber = String(someNumber)

console.log(stringSomeNumber);
console.log(typeof stringSomeNumber);
