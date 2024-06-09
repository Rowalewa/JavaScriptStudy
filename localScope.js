function fun1() {
    var myGlobalVar = 5;
    console.log(myGlobalVar);
}
fun1()

var outerWear = "T-Shirt"
function myOutfit() {
    var outerWear = "Sweater";  // local scope
    return outerWear;
}
console.log(myOutfit());
console.log(outerWear) // global scope