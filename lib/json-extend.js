'use strict';
const whatIsIt = require('./util/what-is-it');

function _extended (targetVal, sourceVal) {
    switch (whatIsIt(sourceVal)) {
        case 'object': return jsonExtend(targetVal, sourceVal);
        case 'array': return sourceVal.map(item => _extended(undefined, item));
        case 'function': return _extended(targetVal, sourceVal(targetVal));
        default: return sourceVal;
    }
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
