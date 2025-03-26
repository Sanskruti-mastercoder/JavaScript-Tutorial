const score = 400 
const balance = new Number(10) // specifically declaring an object that is a number 

// console.log(balance); 
// console.log(score);

// console.log(balance.toExponential(2));
// // console.log(balance.toString().length);
// console.log(balance.toFixed(3));

const num = 23.2006
// console.log(num.toFixed(3)); // Rounds off num to 'x' decimal places 
// console.log(num.toPrecision(2)); // Rounds off num to 'x' significant digits 

const cost = 1000000 
// console.log(cost.toLocaleString('en-IN')); // Inserts comma in num for convenience 

// console.log(Math);
// console.log(Math.abs(-5)); // Gives absolute value 
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.3));


console.log(Math.random()); // Gives random values between 0 and 1 
console.log((Math.random() * 10) + 1);
console.log((Math.floor(Math.random) * 10) + 1);

const max = 20 
const min = 10
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
