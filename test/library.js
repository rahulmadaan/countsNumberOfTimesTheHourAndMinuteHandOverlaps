let assert = require('assert');
let {countHandOverlapTimes} = require('../src/library.js');

describe('count hand overlap times in a given time',function(){
  it('should return zero for no input',function(){
    assert.equal(countHandOverlapTimes(),0);
  });
  it('should return 1 for 1 time hand overlap',function(){
    assert.equal(countHandOverlapTimes(1,0,2,0),1);
  });
  it('should return 2 for 2 hand overlaps',function(){
    assert.equal(countHandOverlapTimes(3,0,4,30),2);
  });
  it('should return 2 for 2 hours time',function(){
    assert.equal(countHandOverlapTimes(3,0,5,0),2);
  });
});
