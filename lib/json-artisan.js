'use strict';
const whatIsIt = require('./util/what-is-it');

function _extend (targetVal, sourceVal) {
    switch (whatIsIt(sourceVal)) {
        case 'object': return artisan(targetVal, sourceVal);
        case 'array': return sourceVal.map(item => _extend(undefined, item));
        case 'function': return _extend(targetVal, sourceVal(targetVal));
        default: return sourceVal;
    }
}

function artisan (target, ...sources) {
    if (whatIsIt(target) !== 'object')
        target = {};

    for (const source of sources) {
        if (whatIsIt(source) !== 'object')
            continue;

        for (const key of Object.keys(source)) {
            target[key] = _extend(target[key], source[key]);
            if (target[key] === undefined)
                delete target[key];
        }
    }

    return target;
};

module.exports = artisan;
