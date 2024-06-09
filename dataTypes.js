/*
Data Types: string, number, undefined(not defined yet), null(nothing), boolean, symbol(immutable primitive value that is unique), object(can store a lot of key value pairs)
 */
var myName = 'Ben' // used throughout whole program
myName = 'Charlie'
let ourName = 'Webstorm'  // within declared scope
const pi = 3.14 // can never change

// declare variable
var a;
// declare variable and assigning
var b = 2;
// not necessary to use semicolon but recommended to know where end of line is
console.log(a)
a = 7;
// assigned the contents of a to b
b = a;
console.log(a);
// constructing strings with var
var ourStr = "Hello, Our Name is: " + ourName + ". Use us for coding in Javascript and TypeScript."
console.log(ourStr)
// appending var to str
var anAdjective = "awesome";
var ourMessage = "Webstorm is ";
ourMessage += anAdjective
console.log(ourMessage)

console.log('An adjective is: '+ anAdjective.length + ' long');
console.log('First Letter of An Adjective is: ' + anAdjective[0]);
console.log(anAdjective.indexOf("s"))
console.log(anAdjective)
var lastLetter = anAdjective.slice(-1)
console.log(lastLetter)
var lastLetterOfAdj = anAdjective[anAdjective.length - 1];
console.log(lastLetterOfAdj)
var secondLastLetterOfAdj = anAdjective[anAdjective.length - 2];
console.log(secondLastLetterOfAdj)
