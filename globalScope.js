var myGlobal = 10

// without putting var the variable automatically becomes global
function fun2() {
    if (typeof myGlobal !== "undefined") {
        console.log('Type of myGlobal is: ' + typeof(myGlobal))
    }else {
        console.log('Type of myGlobal is: undefined')
    }
    var myGlobalVar = 5;
    console.log(myGlobalVar);
}
// console.log(myGlobalVar) -> error
fun2()