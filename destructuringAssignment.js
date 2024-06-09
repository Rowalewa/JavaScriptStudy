let voxel = {x: 3.6, y : 7.4, z:6.54};

let x = voxel.x  // x = 3.6
let y = voxel.y  // y = 7.4
let z = voxel.z  // z = 6.54

const {x: a, y: b, z: c} = voxel; // a = 3.6, b = 7.4, c = 6.54
// get value of x and copy it to variable a get value of y and copy it to variable b and so on

const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
};
function getTempOfTomorrow(avgTemperatures) {
    'use strict'
    const {tomorrow : tempOfTomorrow} = avgTemperatures; // get tomorrow field from average temperatures object and assign it to tempOfTomorrow Variable
    return tempOfTomorrow;
}
console.log(getTempOfTomorrow(AVG_TEMPERATURES))

// Destructuring assignment with nested objects
const LOCAL_FORECAST = {
    today: {min: 72, max: 83},
    tomorrow: {min: 73.3, max: 84.6},
};
function getMaxOfTomorrow(localForecast) {
    'use strict'
    // const {tomorrow: maxOfTomorrow} = localForecast;  // destructuring happens here
    // return maxOfTomorrow.max;
    // or
    const {tomorrow: {max : maxTempTomorrow}} = localForecast; // destructured twice
    return maxTempTomorrow;

}
console.log(getMaxOfTomorrow(LOCAL_FORECAST))


const [f, g,, h] = [1, 2, 3, 4, 5, 6]; // 1st, 2nd, 4th.
// Third element skipped since blank.
// With arrays, unlike objects you cannot specify which element to destructure,
// it follows sequentially
console.log(f, g, h);
let m = 8, n = 6;
(() => {
    'use strict';
    [m, n] = [n, m] // this switches a and b
    }
)();
console.log(m)
console.log(n)

// destructuring with rest operator
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
    const [,,...arr] = list; // do nothing for first and second variable but assign the rest of values to others
    return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);
console.log(source)
function removeFirstTwoOther(list) {
    const [a , b , ...arr2] = list;  // here you can pass random variables to avoid confusion in indexing of items to be removed from array.
    return arr2;
}
const arr2 = removeFirstTwoOther(source);
console.log(source);
console.log(arr2)

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average:35.85
};
const half = (function (){
    'use strict';
    return function half({max, min}){
        return 'Half is: '+ (max + min) / 2.0;
    };

})();
console.log(half(stats));
console.log(stats);