'use strict';
const whatIsIt = require('./util/what-is-it');

function _extended (targetVal, sourceVal) {
    switch (whatIsIt(sourceVal)) {
        case 'object': return jsonExtend(targetVal, sourceVal);
        case 'array': return _extendedArray(targetVal, sourceVal);
        case 'function': return _extended(targetVal, sourceVal(targetVal));
        default: return sourceVal;
    }
}

function _extendedArray (targetArr, sourceArr) {
    if (whatIsIt(targetArr) !== 'array')
        targetArr = [];

    const result = [];

    for (let i = 0; i < sourceArr.length; i++) {
        result.push(_extended(targetArr[i], sourceArr[i]));
    }

    return result;
}

function jsonExtend (target, ...sources) {
    if (whatIsIt(target) !== 'object')
        target = {};

    for (const source of sources) {
        if (whatIsIt(source) !== 'object')
            continue;

        for (const key of Object.keys(source)) {
            target[key] = _extended(target[key], source[key]);
            if (target[key] === undefined)
                delete target[key];
        }
    }

    return target;
};

module.exports = jsonExtend;
