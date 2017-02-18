'use strict';
const whatIsIt = require('../util/what-is-it');

const _isNumber = value => whatIsIt(value) === 'number';

const inc = (amt = 1) => value => (_isNumber(value) ? value + amt : amt);
const dec = (amt = 1) => value => (_isNumber(value) ? value - amt : -amt);
const mul = (amt = 1) => value => (_isNumber(value) ? value * amt : 0);
const div = (amt = 1) => value => (_isNumber(value) ? value / amt : 0);
const max = (amt = 0) => value => (_isNumber(value) && value > amt ? value : amt);
const min = (amt = 0) => value => (_isNumber(value) && value < amt ? value : amt);

module.exports = {
    inc,
    dec,
    mul,
    div,
    min,
    max
};
