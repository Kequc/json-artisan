'use strict';
const whatIsIt = require('../util/what-is-it');

const _isBoolean = value => whatIsIt(value) === 'boolean';

const toggle = (def = true) => value => (_isBoolean(value) ? !value : def);

module.exports = {
    toggle
};
