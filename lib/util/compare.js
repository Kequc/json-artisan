'use strict';
const whatIsIt = require('./what-is-it');

const compare = (targetVal, sourceVal) => {
    switch (whatIsIt(sourceVal)) {
        case 'object':
        case 'array': return objectExtend(targetVal, sourceVal);
        case 'function': return compare(targetVal, sourceVal(targetVal));
        default: return sourceVal;
    }
};

module.exports = compare;
