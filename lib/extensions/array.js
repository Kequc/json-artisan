'use strict';
const whatIsIt = require('../util/what-is-it');

const _isArray = value => whatIsIt(value) === 'array';

const insert = (...vals) => value => {
    if (!_isArray(value)) return vals;
    return vals.concat(value);
};
const splice = (start = 0, deleteCount = 0, ...vals) => value => {
    const result = [].concat(_isArray(value) ? value : []);
    result.splice(start, deleteCount, ...vals);
    return result;
};
const concat = (...vals) => value => {
    if (!_isArray(value)) return vals;
    return value.concat(vals);
};
const addToSet = (...vals) => value => {
    if (!_isArray(value)) return vals;
    return value.concat(vals.filter(val => value.indexOf(val) <= -1));
}
const map = (func = () => {}) => value => {
    if (!_isArray(value)) return [];
    return value.map(func);
}

module.exports = {
    insert,
    splice,
    concat,
    addToSet,
    map
};
