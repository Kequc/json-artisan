'use strict';

const whatIsIt = (thing) => {
    if (thing === undefined) return 'undefined';
    if (thing === null) return 'null';
    switch (thing.constructor) {
        case String: return 'string';
        case Number: return 'number';
        case Boolean: return 'boolean';
        case Array: return 'array';
        case Function: return 'function';
        case Object: return 'object';
    }
    return 'unknown';
};

module.exports = whatIsIt;
