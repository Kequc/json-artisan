'use strict';
const whatIsIt = require('./util/what-is-it');

const _cannotExtend = type => (type !== 'object' && type !== 'array');
const _emptyTarget = type => (type === 'array' ? [] : {});

function _extended (targetVal, sourceVal) {
    switch (whatIsIt(sourceVal)) {
        case 'object':
        case 'array': return jsonExtend(targetVal, sourceVal);
        case 'function': return _compare(targetVal, sourceVal(targetVal));
        default: return sourceVal;
    }
}

const jsonExtend = (target, ...sources) => {
    if (_cannotExtend(whatIsIt(target)))
        target = undefined;

    for (const source of sources) {
        const type = whatIsIt(source);

        if (_cannotExtend(type))
            continue;

        if (target === undefined)
            target = _emptyTarget(type);

        for (const key of Object.keys(source)) {
            target[key] = _extended(target[key], source[key]);
            if (target[key] === undefined)
                delete target[key];
        }
    }

    return target;
};

module.exports = jsonExtend;
