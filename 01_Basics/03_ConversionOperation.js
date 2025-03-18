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

// ******************** Operations ********************

// let value = 3
// let negValue = -value
// console.log(negValue);


// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**2);
// console.log(2%2);

let string1 = "Hello "
let string2 = "Everyone"

let string3 = string1 + string2

console.log(string3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 +2);
console.log(1 + 2 + "2");

// node 01_Basics/03_ConversionOperation.js

console.log(+true);
console.log(+ "");

let num1, num2, num3 

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

