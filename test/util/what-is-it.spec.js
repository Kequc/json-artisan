'use strict';
const mocha = require('mocha');
const expect = require('chai').expect;

const whatIsIt = require('../../lib/util/what-is-it');

describe('whatIsIt', function () {
    describe('Null and undefined', function () {
        it('correctly detects empty values', function () {
            expect(whatIsIt(null)).to.equal('null');
            expect(whatIsIt(undefined)).to.equal('undefined');
            expect(whatIsIt()).to.equal('undefined');
        })
    });
    describe('String', function () {
        it('correctly detects strings', function () {
            expect(whatIsIt('hello')).to.equal('string');
            expect(whatIsIt(new String())).to.equal('string');
            expect(whatIsIt('new\nline and spaces')).to.equal('string');
            expect(whatIsIt('11')).to.equal('string');
            expect(whatIsIt('')).to.equal('string');
        })
    });
    describe('Number', function () {
        it('correctly detects numbers', function () {
            expect(whatIsIt(100)).to.equal('number');
            expect(whatIsIt(new Number())).to.equal('number');
            expect(whatIsIt(0)).to.equal('number');
        })
    });
    describe('Boolean', function () {
        it('correctly detects booleans', function () {
            expect(whatIsIt(true)).to.equal('boolean');
            expect(whatIsIt(false)).to.equal('boolean');
            expect(whatIsIt(new Boolean())).to.equal('boolean');
        })
    });
    describe('Array', function () {
        it('correctly detects arrays', function () {
            expect(whatIsIt(['test', 1234])).to.equal('array');
            expect(whatIsIt(['string'])).to.equal('array');
            expect(whatIsIt([undefined])).to.equal('array');
            expect(whatIsIt([null])).to.equal('array');
            expect(whatIsIt(new Array())).to.equal('array');
            expect(whatIsIt([function () {}])).to.equal('array');
            expect(whatIsIt([])).to.equal('array');
        })
    });
    describe('Function', function () {
        it('correctly detects functions', function () {
            expect(whatIsIt(() => {})).to.equal('function');
            expect(whatIsIt((value) => { return 11; })).to.equal('function');
            expect(whatIsIt(function () {})).to.equal('function');
            expect(whatIsIt(function (value) { return 'str'; })).to.equal('function');
            expect(whatIsIt(new Function())).to.equal('function');
            expect(whatIsIt(value => [])).to.equal('function');
        })
    });
    describe('Object', function () {
        it('correctly detects objects', function () {
            expect(whatIsIt({ test: 'yay', cat: function () {} })).to.equal('object');
            expect(whatIsIt({ number: 113 })).to.equal('object');
            expect(whatIsIt(new Object())).to.equal('object');
            expect(whatIsIt({ '0': 'cats', '1': 'dogs' })).to.equal('object');
            expect(whatIsIt({})).to.equal('object');
        })
    });
    describe('Other', function () {
        it('correctly defaults unknown', function () {
            expect(whatIsIt(new Buffer(100))).to.equal('unknown');
        })
    });
});
