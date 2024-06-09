function caseInSwitch(val) {
    var answer=""
    switch(val){
        case 1:
            answer="alpha"
            break
        case 2:
            answer="beta"
            break
        case 3:
            answer="gamma"
            break
        case 4:
            answer="delta"
            break
        default:
            answer = "Invalid"
            break
    }
    return answer;
    // break makes it stop going on and on
}
console.log(caseInSwitch(5))

function sequentialSizes(val){
    var answer = ""
    switch (val){
        case 1:
        case 2:
        case 3:
            answer = "Low"
            break
        case 4:
        case 5:
        case 6:
            answer = "Medium"
            break
        case 7:
        case 8:
        case 9:
            answer = "High"
            break
    }
    return answer
}
console.log(sequentialSizes(7))