function randomFunction() {
    return Math.random()
}
console.log(randomFunction()); // between 0 and 1 but not 1 0r 0

let randomWholeNumberBetween0and19 = Math.floor(Math.random() * 20)  // Math.floor rounds off to nearest whole number
function randomWholeNumber() {
    return Math.floor(Math.random() * 10);  // between 0 and 10
}
console.log(randomWholeNumber());
console.log(randomWholeNumberBetween0and19);

function ourRandomRange(ourMin, ourMax){
    return Math.floor(Math.random() * (ourMax - ourMin + 1) + ourMin);
}

console.log(ourRandomRange(1, 9))


