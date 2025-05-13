// Ways to declare and initialise arrays :

const arr1 = [0, 1, 2, 3, 4, 5]
const hero = ["spiderman", "ironman"]
const mix = [1, 2, 3, "hello", true]
const arr2 = new Array(2, 4, 6, 7)

// Arrays in JS a re resizable , can be a mix of datatypes 

console.log(arr2[3]);

// node 02_basics2/01_arrays.js

// Array Methods

arr1.push(6) //Adds element to the end 
arr1.pop() //Removes the last element 
arr1.unshift(29) //Adds an element to the beginning of the array 
arr1.shift() //Removes element from the start of array

console.log(arr1);

console.log(arr1.includes(5));
console.log(arr1.indexOf(5));

const newArr = arr1.join()

console.log(newArr);
console.log(typeof newArr);
console.log(arr1);
console.log(typeof arr1);