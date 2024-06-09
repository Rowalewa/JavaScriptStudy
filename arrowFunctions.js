// anonymous function
let magic = function (){
    return new Date();
};
console.log(magic());
let myConCat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConCat([1,2], [3,4, 5]));

const magic2 = () => new Date();
console.log(magic2);

// functions taken as arguments is good time for arrow functions
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    for (let i = 0; i < arr.length; i++) {

    }
    return squaredIntegers;
};
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

const increment = (function () {
    return function increment(number, value = 1) {  // default value 1
        return number + value;
    };
})();
console.log(increment(5,2));
console.log(increment(5));


const total = (function () {
    return function total(...args){ // rest operator, works with all passed, no specified number of
        return args.reduce((a, b) => a + b, 0);
    };
})();
console.log(total(1, 2,3));