'use strict';
const whatIsIt = require('../util/what-is-it');

const _isArray = value => whatIsIt(value) === 'array';

const unshift = (val, i = 0) => value => (_isArray(value) ? [val].concat(value) : [val]);
const push = (val) => value => (_isArray(value) ? [].concat(value).concat([val]) : [val]);

module.exports = {
    toggle
};
