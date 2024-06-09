let myStorage = {
    'car':{
        'inside':{
            'glove box': 'maps',
            'passenger seat': 'crumbs'
        },
        'outside':{
            'trunk': 'jack'
        }
    }
};

var gloveBoxContents = myStorage.car.inside['glove box'];
// for glove box element we use bracket notation since it has space
console.log(gloveBoxContents);