var myNestArray = [["Bulls", 23],["White Sox", 45]]
var myNestArray2 = [["Bulls", 23],["White Sox", 45], [['Red Bulls', 35],["Michelin", 40]]]
console.log(myNestArray[0][0]);
console.log(myNestArray[0][1]);
console.log(myNestArray[1][0]);
console.log(myNestArray[1][1]);
console.log(myNestArray2[2][0][0]);

// add item to array
myNestArray.push(["Lakers", 32])
console.log(myNestArray);

// remove last item from array
removedLastFromMyNestedArray = myNestArray.pop()
console.log(myNestArray);
console.log(removedLastFromMyNestedArray)

// remove first item from array
myNestArray.push(["Lakers", 32])
removedFirstFromMyNestedArray = myNestArray.shift()
console.log(myNestArray);
console.log(removedFirstFromMyNestedArray)


// adding element to beginning of array
myNestArray.unshift(["Michigan", 19])
console.log(myNestArray);

// shopping list
var myList = [["Cereal", 3], ["Milk", 2], ["Bananas", 3], ["Juice", 2], ["Eggs", 12]]
console.log(myList);

let myPlants = [
    {
        type: 'flowers',
        list: [
            'rose',
            'tulip',
            'dandelion'
        ]
    },
    {
        type: 'trees',
        list: [
            'fir',
            'pine',
            'birch'
        ]
    }
];
let secondTree = myPlants[1].list[1]
console.log(secondTree)
