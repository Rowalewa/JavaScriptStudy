
function abTest(a, b) {
    if (a < 0){
        return "undefined, a is " + a + "Should be 0 or greater than 0";
    }else if (b < 0 ){
        return "undefined, b is " + b + ". Should be 0 or greater than 0";
    }
    else {
        /*
        returns the desired result by calculating the square root of a and b, summing them,
        squaring the result, and then rounding it to the nearest integer using Math.round:

        
        This function follows these steps:
        Calculate the square root of a using Math.sqrt(a).
        Calculate the square root of b using Math.sqrt(b).
        Sum the square roots.
        Square the result of the sum using Math.pow(sum, 2).
        Round the squared result to the nearest integer using Math.round.
         */
        return Math.round(Math.pow(Math.sqrt(a)+ Math.sqrt(b), 2))
    }
}
console.log(abTest(2, 2))