const person = {
    name: 'Zodiac Hasbro',
    age: 56
};

const greeting = `Hello, my name is ${person.name}!
 I am ${person.age} years old`; // here we use backticks (`)
console.log(greeting);

const result = {
    success: ['max-length', 'no-amd', 'prefer-arrow-functions'],
    failure: ['no-var', 'var-on-top', 'linebreak'],
    skipped: ['id-blacklist', 'no-dup-keys']
}

function makeList(arr) {
    const resultDisplayArray = [];
    for (let i = 0; i < arr.length; i++) {
        resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`);
    }
    return resultDisplayArray
}
const resultDisplayArray = makeList(result.failure);
console.log(resultDisplayArray)

const createPerson = (name, age, gender) => {
    return {
        name,
        age,
        gender
    };
};
console.log(createPerson('John', 23, 'Male'));

// or

const createPerson2 = (name, age, gender) => ({name, age, gender});
console.log(createPerson2('Jane', 20, 'Female'));

// object with functions
const bicycle = {
    gear: 2,
    setGear (newGear){
        'use strict';
        this.gear = newGear;
    },
};
bicycle.setGear(3);
console.log(bicycle.gear);