var myDog = {
    'name': 'Max',
    'legs': 4,
    'tails': 1,
    'friends': ['Owner']
}
console.log(myDog["name"]);
console.log(myDog.name);
myDog.name = 'Ben'
console.log(myDog.name);
myDog.sound = "Woof! Woof!"
console.log(myDog);
delete myDog.tails
console.log(myDog);

var monthObj = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December'
};
var monthNum = 8;
var month = monthObj[monthNum];
console.log(month)

// complex object
var myMusic = [
    {
    'artist': 'Billy Joel',
    'title': 'Piano Man',
    'release-year': 1973,
    'formats': [
        'CD',
        '8T',
        'LP'
    ],
    'gold': true
    },
    {
        'artist': 'Ben Harry',
        'title': 'Piano Duet',
        'release-year': 1979,
        'formats': [
            'Youtube Video',
            'Tape Recorder',
            'DVD'
        ],
        'gold': true
    }
]
console.log(myMusic);

// const can be mutated in strings so we use freeze
function freezeObj() {
    'use strict';
    const MATH_CONSTANTS = {
        PI: 3.14
    };

    Object.freeze(MATH_CONSTANTS); // this makes it immutable

    try {
        MATH_CONSTANTS.PI = 3.1415926535;
    }catch (ex) {
        console.log(ex)
    }
    return MATH_CONSTANTS.PI;
}
console.log(freezeObj());

// getters and setters  obtain values of properties from an object and set values of the property within the object
function makeClass() {
    class Book {
        constructor(author) {
            this._author = author;  // this means that the variable used here
            // and _variable means the variable is private hence not accessed out of the scope
        }

        get writer() { // get changes the value of private variable without user directly accessing it which is _author set when I constructed the object
            return this._author;
        }

        set writer(updateAuthor) {
            this._author = updateAuthor;
        }
    }
    return Book;
}
const book = makeClass();
const book1 = new book('Ben')
let auth = book1.writer;
book1.writer = 'Brian';
console.log(book1);
auth = book1.writer;
console.log(auth);

function makeClass2(){
    class Thermostat{
        constructor(temp) {
            this._temp = temp;
        }
        get temperature(){
            return this._temp;
        }
        set temperature(updatedTemp){
            this._temp = updatedTemp;
        }
    }
    return Thermostat;
}
// variables and properties have no brackets on call, only functions do.
const Thermostat = makeClass2();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
console.log(temp);
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp);

