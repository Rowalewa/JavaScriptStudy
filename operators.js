// rest operator
const total = (function () {
    return function total(...args){ // rest operator, works with all passed, no specified number of
        return args.reduce((a, b) => a + b, 0);
    };
})();
console.log(total(1, 2,3));

// spread operator
// Takes an array and spreads it into its individual parts
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function (){
    arr2 = [...arr1]; // making array 2 equal all the contents of array 1
    arr1[0] = 'potato'
})();
console.log(arr2);
console.log(arr1);