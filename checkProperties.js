var myObjProp = {
    'gift': 'pony',
    'pet': 'kitten',
    'bed': 'sleigh'
};
function checkMyObjProp(checkProp) {
    if (myObjProp.hasOwnProperty(checkProp)) {
        return myObjProp[checkProp];
    }else {
        return '404 Not Found';
    }
}
console.log(checkMyObjProp('gift'));
console.log(checkMyObjProp('pet'));
console.log(checkMyObjProp('bed'));
console.log(checkMyObjProp('pony'));
console.log(checkMyObjProp('kitten'));
console.log(checkMyObjProp('sleigh'));
console.log(checkMyObjProp('prop'));