// constructor function
let SpaceShuttle = function (targetPlanet){
    this.targetPlanet = targetPlanet;
}
let zeus = new SpaceShuttle('Jupiter'); // declaration of new object using
// new but only because a constructor was used
console.log(zeus.targetPlanet);

// class
class SpaceShuttle2{
    constructor(targetPlanet){
        this.targetPlanet = targetPlanet;
    }
}
let zeus2 = new SpaceShuttle2('Mars');
console.log(zeus2.targetPlanet);

function makeClass(){
    class Vegetable{
        constructor(name){
            this.name = name;
        }
    }
    return Vegetable
}
const Vegetable = makeClass();
const carrot = new Vegetable('Carrot');
console.log(carrot.name);