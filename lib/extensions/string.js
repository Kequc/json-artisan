'use strict';
const whatIsIt = require('../util/what-is-it');

const _isString = value => whatIsIt(value) === 'string';

const append = (str = '') => value => (_isString(value) ? value + str : str);
const prepend = (str = '') => value => (_isString(value) ? str + value : str);

module.exports = {
    append,
    prepend
};
