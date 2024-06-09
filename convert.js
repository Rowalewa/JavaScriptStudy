function convertToInteger(str) {
    return parseInt(str);
}
console.log(convertToInteger("56"));

// using parse with radix to specify type of number
function convertToInt(str) {
    return parseInt(str, 2);  // this is as binary, you can do as oct, hex, dec and other numbers.
}
console.log(convertToInt("1001"))