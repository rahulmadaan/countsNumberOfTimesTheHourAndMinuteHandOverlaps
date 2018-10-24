let assert = require('assert');
let {stringToNumber} = require('../lib/inputStringToNumber.js');

assert.deepEqual(stringToNumber('',''),0);
assert.deepEqual(stringToNumber('05:10','05:35'),[5,10,5,35]);
assert.deepEqual(stringToNumber('05:24','05:56'),[5,24,5,56]);
assert.deepEqual(stringToNumber('05:19','13:21'),[5,19,13,21]);
assert.deepEqual(stringToNumber('15:37','17:53'),[15,37,17,53]);
assert.deepEqual(stringToNumber('20:34','23:59'),[20,34,23,59]);
assert.deepEqual(stringToNumber('00:00','03:14'),[00,00,03,14]);
