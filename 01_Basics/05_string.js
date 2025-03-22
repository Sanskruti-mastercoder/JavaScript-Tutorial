const name = "Sanskruti"
const repositoryCount = 2

console.log(name + repositoryCount + "value"); // out-dated syntax

console.log(`My name is ${name} and count is ${repositoryCount}`);

const gameName = new String('SanskrutiT')

// console.log(gameName[0]);
// console.log(gameName.length);
// console.log(gameName.toLocaleUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('a'));

// const newString = gameName.substring(0, 4)
// console.log(newString);

const string2 = gameName.slice(0, 4) // can put negative values as well , in that case it starts from the end 
const string3 = gameName.slice(-10, 6)
console.log(string2);
console.log(string3);

const newString1 = "     sanskruti     "
console.log(newString1);
console.log(newString1.trim());   // trimmed all the blank spaces in the string 

const url = "https://iitbhu.ac.in"

console.log(url.replace('iit', 'it'));
console.log(url.includes('ac'));

// converting string into an array

console.log(url.split('.')); // syntax : split('separator', limit)

// node 01_Basics/05_string.js
