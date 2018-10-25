//let lib = require('');

const countMinutes = function(input) {
  startHour = input[0];
  startMinutes = input[1];
  endHour = input[2];
  endMinutes = input[3];
  let minuteCount = 0;
  let hourCount = 0;
  while(startHour != endHour) {
    minuteCount = 60 - startMinutes;
    startHour += 1;
    startMinutes = 0;
  }
  return [hourCount,minuteCount];
}
exports.countMinutes=countMinutes;
