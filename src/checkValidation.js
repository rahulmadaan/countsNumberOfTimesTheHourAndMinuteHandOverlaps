const isBetween = function(upperLimit,lowerLimit){
  return function(number) {
    return number>=lowerLimit && number <= upperLimit;
  };
};
const isCorrectHour = isBetween(23,0);
const isCorrectMinute = isBetween(59,0);

const checkValidation = function(givenTime) {
  return isCorrectHour(givenTime[0]) && isCorrectHour(givenTime[2]) && 
    isCorrectMinute(givenTime[1]) && isCorrectMinute(givenTime[3]);

}
exports.checkValidation=checkValidation;
