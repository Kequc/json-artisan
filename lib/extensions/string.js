'use strict';
const whatIsIt = require('../util/what-is-it');

const _isString = value => whatIsIt(value) === 'string';

const append = (str = '', sep = '') => value => (_isString(value) ? value + sep + str : str);
const prepend = (str = '', sep = '') => value => (_isString(value) ? str + sep + value : str);

module.exports = {
    append,
    prepend
};
