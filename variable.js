function checkScope() {
    'use strict'
    let i = 'function scope';
    if (true){
        let i = 'block scope';
        console.log('Block scope is ' + i);
    }
    return 'Function scope is ' + i;
}
console.log(checkScope());

// else
function checkScopeVar() {
    'use strict' // catch mistakes
    var i = 'function scope';
    if (true){
        i = 'block scope';
        console.log('Block scope is ' + i);
    }
    return 'Function scope is ' + i;
}
console.log(checkScopeVar());

// with var, it takes the global state such that it is so, throughout, so here it changes to block scope
// cannot be changed here
const pi = 3.1415926535;
// pi = pi + 1; ERROR
// If you are sure you will not re-use a variable use const to avoid making mistakes

// array mutation using const
const s = [5, 7, 2]
console.log(s);
function editInPlace() {
    'use strict'
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
    return s
}
console.log(editInPlace());