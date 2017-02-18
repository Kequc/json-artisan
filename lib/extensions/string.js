'use strict';
const whatIsIt = require('../util/what-is-it');

const _isString = value => whatIsIt(value) === 'string';

const Append = (str = '', sep = '') => value => (_isString(value) ? value + sep + str : str);
const Prepend = (str = '', sep = '') => value => (_isString(value) ? str + sep + value : str);

module.exports = {
    Append,
    Prepend
};
