
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
function getGrade(score) {
    let Grade = ""
    if (score > 100){
      Grade = "Grade cannot be assigned to a score greater than 100."
    } else if (score === 100){
      Grade = "A++";
    } else if (score >=90 && score <= 99){
      Grade = "A";
    } else if (score >= 80){
      Grade = "B"
    } else if (score >= 70){
      Grade = "C";
    } else if (score >= 60){
      Grade = "D"
    } else if (score >= 0){
      Grade = "F"
    } else {
      Grade = "Grade cannot be assigned to a negative score. Failed"
    }
    return Grade;
  
  }
  
  console.log(getGrade(96));
  console.log(getGrade(82));
  console.log(getGrade(59));
  function hasPassingGrade(score) {
    if (getGrade(score) !== "F"){
      return true;
    } else {
      return false;
    }
    
  }
  
  
  console.log(hasPassingGrade(100));
  console.log(hasPassingGrade(53));
  console.log(hasPassingGrade(87));
  function studentMsg(totalScores, studentScore) {
  if (hasPassingGrade(studentScore)){
    return "Class average: " + getAverage(totalScores) + ". Your grade: " +getGrade(studentScore) + ". You passed the course.";
  }else{
    return "Class average: " + getAverage(totalScores) + ". Your grade: " +getGrade(studentScore) + ". You failed the course.";
  }

}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));