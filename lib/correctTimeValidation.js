//let lib = require('./stringToNumber.js');
const timeValidation = function(time) {
  if((time[0] <=0 || time[0] >=23 ) || (time[2] <=0 || time[2] >=23 )) {
    return false;
  }
   if((time[1] <=0 || time[1] >=59) || (time[1] <=0 || time[3] >=59)) {
    return false;
  }
  return true;
}
exports.timeValidation=timeValidation;
