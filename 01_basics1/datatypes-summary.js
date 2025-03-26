// Categorisation of the data on the basis of how it is stored in the memory and is accesed 

// Primitive Data type 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 19
const marks = 10.5
const loggedIn = true 

let username;

const id = Symbol('123')
const anotherId = Symbol('123')

// Reference Data type (or) Non Primitive 

// Array, Objects, Functions 

const heroes = ["spiderman", "ironman", "thor"]; // Array 
let MyObject = {
    name: "Sanskruti",
    age: 19,
}

console.log(MyObject);

// Declaring function like a variable 

const myFunction = function(){
    console.log("Hello Sans");
}

console.log(typeof loggedIn);
console.log(typeof null);
console.log(typeof myFunction);

// *****************************************************************

// Stack memory (primitve) and Heap memory (non primitve)

let myYoutubeName = "Sanskruti"

let anotherName = myYoutubeName
anotherName = "sans"

console.log(myYoutubeName);
console.log(anotherName);

let user1 = {
    email: "sanskruti@gmail.com",
    upi: "7058237434@ybl"
}

let user2 = user1

user2.email = "user@gmail.com"

console.log(user1);
console.log(user2);


// ************************ VERY IMPORTANT ****************************
// In STACK , the original value is not altered and whatever 
// we do to the value of the variable after declaring once is actually 
// changed in the copy of the variable and NOT the original variable 

// Whereas in HEAP , the original value IS ALTERED whenever smt is 
// done after declaring the value , there is NO COPY of the data everything 
// is done to the original value only.