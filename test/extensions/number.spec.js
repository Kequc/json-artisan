'use strict';
const mocha = require('mocha');
const expect = require('chai').expect;

const $ = require('../../lib/extensions');

describe('Number extension', function () {
    describe('inc', function () {
        const operation = $.Number.inc;
        it('increments a number', function () {
            expect(operation()(20)).to.equal(21);
            expect(operation()(1)).to.equal(2);
            expect(operation(2)(20)).to.equal(22);
            expect(operation(30)(1)).to.equal(31);
        });
        it('sets a default on invalid data', function () {
            expect(operation()(undefined)).to.equal(1);
            expect(operation()('string')).to.equal(1);
            expect(operation(2)(undefined)).to.equal(2);
            expect(operation(30)([2])).to.equal(30);
        });
    });
    describe('dec', function () {
        const operation = $.Number.dec;
        it('decrements a number', function () {
            expect(operation()(20)).to.equal(19);
            expect(operation()(1)).to.equal(0);
            expect(operation(2)(20)).to.equal(18);
            expect(operation(30)(1)).to.equal(-29);
        });
        it('sets a default on invalid data', function () {
            expect(operation()(undefined)).to.equal(-1);
            expect(operation()('string')).to.equal(-1);
            expect(operation(2)(undefined)).to.equal(-2);
            expect(operation(30)([2])).to.equal(-30);
        });
    });
    describe('mul', function () {
        const operation = $.Number.mul;
        it('multiplies a number', function () {
            expect(operation()(20)).to.equal(20);
            expect(operation()(1)).to.equal(1);
            expect(operation(2)(20)).to.equal(40);
            expect(operation(30)(1)).to.equal(30);
        });
        it('sets a default on invalid data', function () {
            expect(operation()(undefined)).to.equal(0);
            expect(operation()('string')).to.equal(0);
            expect(operation(2)(undefined)).to.equal(0);
            expect(operation(30)([2])).to.equal(0);
        });
    });
    describe('div', function () {
        const operation = $.Number.div;
        it('divides a number', function () {
            expect(operation()(20)).to.equal(20);
            expect(operation()(1)).to.equal(1);
            expect(operation(2)(20)).to.equal(10);
            expect(operation(30)(300)).to.equal(10);
        });
        it('sets a default on invalid data', function () {
            expect(operation()(undefined)).to.equal(0);
            expect(operation()('string')).to.equal(0);
            expect(operation(2)(undefined)).to.equal(0);
            expect(operation(30)([2])).to.equal(0);
        });
    });
    describe('max', function () {
        const operation = $.Number.max;
        it('returns the largest number', function () {
            expect(operation()(20)).to.equal(20);
            expect(operation()(1)).to.equal(1);
            expect(operation(2)(20)).to.equal(20);
            expect(operation(30)(1)).to.equal(30);
        });
        it('sets a default on invalid data', function () {
            expect(operation()(undefined)).to.equal(0);
            expect(operation()('string')).to.equal(0);
            expect(operation(2)(undefined)).to.equal(2);
            expect(operation(30)([2])).to.equal(30);
        });
    });
    describe('min', function () {
        const operation = $.Number.min;
        it('returns the smallest number', function () {
            expect(operation()(20)).to.equal(0);
            expect(operation()(1)).to.equal(0);
            expect(operation(2)(20)).to.equal(2);
            expect(operation(30)(1)).to.equal(1);
        });
        it('sets a default on invalid data', function () {
            expect(operation()(undefined)).to.equal(0);
            expect(operation()('string')).to.equal(0);
            expect(operation(2)(undefined)).to.equal(2);
            expect(operation(30)([2])).to.equal(30);
        });
    });
});
