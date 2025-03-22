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
