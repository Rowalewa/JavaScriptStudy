function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result= ""
    result = "The " + myAdjective + " "+ myNoun + " " + myVerb + " "+ myAdverb + ".";
    return result;
}
console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("plane", "new", "flew", "fast"));

function myReusableFunction(){
    console.log("Hello World!")
}
myReusableFunction();
myReusableFunction();

// arguments
function argsFunctionSubtract(a, b) {
    console.log(a - b);
}
argsFunctionSubtract(10, 5)

num = 70;
function timesFive(num){
    return num*5;
}
console.log(timesFive(num));

sum = 0
function addFive(sum){
    sum = sum + 5;
}
console.log(addFive(sum));
addFive(sum);
function addFiveWithReturn(sum){
    sum = sum + 5;
    return sum;
}
console.log(addFiveWithReturn(sum));

function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}

var testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// JSON.stringify turns the array into a string on the console
console.log("Before " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 10))
console.log("After " + JSON.stringify(testArr));