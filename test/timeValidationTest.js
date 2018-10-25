let lib = require('../lib/correctTimeValidation.js').timeValidation;
let assert = require('assert');

// valid time
assert.equal(lib([5,29,3,38]),true);
assert.equal(lib([7,36,3,51]),true);
assert.equal(lib([9,15,3,16]),true);

// invalid time
assert.equal(lib([5,66,23,14]),false);
assert.equal(lib([8,66,1,12]),false);
assert.equal(lib([1,50,25,74]),false);

// negative values
assert.equal(lib([-7,36,-3,-51]),false);
assert.equal(lib([9,-15,3,-16]),false);
