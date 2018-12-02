let {countHandOverlapTimes} = require('./src/library.js');
let {checkValidation} = require('./src/checkValidation.js');
let readline = require('readLine-sync');

const inputTime = function(){

  const beginHour = () => readline.question('Enter begin hours : ') || beginHour();
  const beginMinute = () => readline.question('Enter begin minute : ') || beginMinute();
  const endHour = () => readline.question('Enter end hours : ') || endHour();
  const endMinute = () => readline.question('Enter end minute : ') || endMinute();

  return [ +beginHour() , +beginMinute() , +endHour() , +endMinute()];
};

const main = function() {
  let totalTimes = 0;
  let givenTime = inputTime();

  let beginHour = givenTime[0];
  let beginMinute = givenTime[1];
  let endHour = givenTime[2];
  let endMinute = givenTime[3];

  if(checkValidation(givenTime)) { 
    totalTimes = countHandOverlapTimes(beginHour,beginMinute,endHour,endMinute);
  }
  console.log(totalTimes);
};
main();
