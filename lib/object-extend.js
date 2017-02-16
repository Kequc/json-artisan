'use strict';
const whatIsIt = require('./util/what-is-it');
const compare = require('./util/compare');

const _cannotExtend = thing => {
    switch (whatIsIt(thing)) {
        case 'object':
        case 'array': return true;
    }
    return false;
}

const objectExtend = (target, ...sources) => {
    if (_cannotExtend(target))
        target = {};

    for (const source of sources) {
        if (_cannotExtend(source))
            continue;
        for (const key of Object.keys(source)) {
            target[key] = compare(target[key], source[key]);
            if (target[key] === undefined)
                delete target[key];
        }
    }

    return target;
};

module.exports = objectExtend;
