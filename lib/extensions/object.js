'use strict';
const whatIsIt = require('../util/what-is-it');

const _isObject = value => whatIsIt(value) === 'object';

function _uniqKeys(target, source) {
    const keys = Object.keys(target).concat(Object.keys(source));
    return keys.filter((key, i) => keys.indexOf(key) === i);
}

function _set(target, source) {
    if (!_isObject(target) || !_isObject(source)) return source;
    const result = {};
    const keys = _uniqKeys(target, source);
    for (const key of keys) {
        result[key] = _set(target[key], source[key]);
    }
    return result;
}

const Set = (obj = {}) => value => {
    return _set(value, obj);
};

module.exports = {
    Set
};
