const countHandOverlapTimes = function(beginHour,beginMinute,endHour,endMinute){
  let time = timeGenerator();

  if(beginHour>endHour ){   // using 24 hour format
    endHour+=24;
  }
  if(beginHour==endHour && endMinute<beginMinute){
    endHour+=24;
  }
  let indexbegin=0;
  let indexend=0;
  for(let count=0; count<time.length; count++){

    if(beginHour>=time[count][0]){
      indexbegin=count;
      if( beginMinute<time[count][1]){
        indexbegin=count-1;
      }
    }

    if(endHour>=time[count][0]){
      indexend=count;
      if(endMinute<time[count][1]){
        indexend=count-1;
      }
    }

  }
  //hand overlap times  is array indexes between begin and end time.
  return indexend - indexbegin;
};

//time generator,they overlaps in every 65 minutes (1 hour and 5 minutes) 
const timeGenerator = function(){
  let allHandOverlaps = [];
  for(let index=0; index<24; index++){
    allHandOverlaps.push([index,index*5%60]);
  }
  return allHandOverlaps;
};
exports.countHandOverlapTimes=countHandOverlapTimes;
