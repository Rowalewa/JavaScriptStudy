let forArray = []

for (let i = 1/*initializing*/; i <= 10 /*condition*/; i++/*do*/) {
    forArray.push(i);
}
console.log(forArray);



let oddForArray = []

for (let i = 1; i <= 25 ; i += 2) {
    oddForArray.push(i);
}
console.log(oddForArray);

let evenForArray = []
for (let i = 0; i <= 26 ; i += 2) {
    evenForArray.push(i);
}

console.log(evenForArray);

let countBackForArray = []
for (let i = 25; i >= 0; i -= 2) {
    countBackForArray.push(i);
}
console.log(countBackForArray);

let myArr = [9, 10, 11, 12, 13];
let myTot = 0;
for (let i = 0; i < myArr.length; i++) {
    myTot += myArr[i]; // adds to the value of the array at that index of I index of 0[9] + 1[10] + ..4[13]
}
console.log(myTot);

// nesting for loop
function multiplyAll(arr) {
    let myProduct = 1;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            myProduct *= arr[i][j];
        }
    }
    return myProduct
}
let myProduct = multiplyAll([[1,2], [3,4], [5,6,7]]);
// 0*(1*2)
console.log(myProduct);

// Adding items in an array function
function getAverage(scores) {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) { 
      sum += scores[i]; 
    } 
    let average = sum/scores.length;
    return average;
  
  }
  
  console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
  console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));