'use strict';
const whatIsIt = require('../util/what-is-it');

const _isObject = value => whatIsIt(value) === 'object';

function _set(target, source) {
    if (!_isObject(target) || !_isObject(source)) return source;
    const clone = Object.assign(source);
    for (const key of Object.keys(target)) {
        clone[key] = _set(target[key], source[key]);
    }
    return clone;
}

const Set = (obj = {}) => value => {
    return _set(value, obj);
};

module.exports = {
    Set
};
