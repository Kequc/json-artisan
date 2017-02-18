'use strict';
const mocha = require('mocha');
const expect = require('chai').expect;

const $ = require('../../lib/extensions');

describe('Number extension', function () {
    describe('Inc', function () {
        const operation = $.Number.Inc;
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
    describe('Dec', function () {
        const operation = $.Number.Dec;
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
    describe('Mul', function () {
        const operation = $.Number.Mul;
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
    describe('Div', function () {
        const operation = $.Number.Div;
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
    describe('Max', function () {
        const operation = $.Number.Max;
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
    describe('Min', function () {
        const operation = $.Number.Min;
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
