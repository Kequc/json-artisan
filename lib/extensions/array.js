'use strict';
const whatIsIt = require('../util/what-is-it');

const _isArray = value => whatIsIt(value) === 'array';

const Concat = (...vals) => value => {
    if (!_isArray(value)) return vals;
    return value.concat(vals);
};
const AddToSet = (...vals) => value => {
    if (!_isArray(value)) return vals;
    return value.concat(vals.filter(val => value.indexOf(val) <= -1));
};
const Splice = (start = 0, deleteCount = 0, ...vals) => value => {
    const result = [].concat(_isArray(value) ? value : []);
    result.splice(start, deleteCount, ...vals);
    return result;
};
const Map = (func = () => {}) => value => {
    if (!_isArray(value)) return [];
    return value.map(func);
};

module.exports = {
    Concat,
    AddToSet,
    Splice,
    Map
};
