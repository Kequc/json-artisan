'use strict';
const whatIsIt = require('../util/what-is-it');

const _isNumber = value => whatIsIt(value) === 'number';

const Inc = (amt = 1) => value => (_isNumber(value) ? value + amt : amt);
const Dec = (amt = 1) => value => (_isNumber(value) ? value - amt : -amt);
const Mul = (amt = 1) => value => (_isNumber(value) ? value * amt : 0);
const Div = (amt = 1) => value => (_isNumber(value) ? value / amt : 0);
const Max = (amt = 0) => value => (_isNumber(value) && value > amt ? value : amt);
const Min = (amt = 0) => value => (_isNumber(value) && value < amt ? value : amt);

module.exports = {
    Inc,
    Dec,
    Mul,
    Div,
    Min,
    Max
};
