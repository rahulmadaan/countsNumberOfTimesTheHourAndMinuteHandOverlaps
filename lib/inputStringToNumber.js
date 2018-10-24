const stringToNumber = function(startTime,endTime) {
  if(!startTime || !endTime) return 0;
  let startHour = parseInt(startTime.split(':')[0]);
  let startMinute = parseInt(startTime.split(':')[1]);

  let endHour = parseInt(endTime.split(':')[0]);
  let endMinute = parseInt(endTime.split(':')[1]);
  return [startHour, startMinute , endHour , endMinute];
}

module.exports={stringToNumber};

