let assert = require('assert');
let lib = require('../lib/countMinutes.js').countMinutes;

assert.deepEqual(lib([2,15,3,00]),[0,45]);
assert.deepEqual(lib([6,46,7,00]),[0,14]);
assert.deepEqual(lib([9,23,10,00]),[0,37]);
