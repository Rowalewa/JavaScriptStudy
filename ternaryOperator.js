function checkEqual(a, b) {
    return a === b? true : false;
}
console.log(checkEqual(2,2));

function checkSign(num) {
    return num > 0? 'Positive' : num < 0? 'Negative' : 'zero';
}
console.log(checkSign(-4));
console.log(checkSign(5));
console.log(checkSign(0));