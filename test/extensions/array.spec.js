'use strict';
const mocha = require('mocha');
const expect = require('chai').expect;

const $ = require('../../lib/extensions');

describe('Array extension', function () {
    describe('Concat', function () {
        const operation = $.Array.Concat;
        it('appends items to an array', function () {
            expect(operation()(['hello'])).to.eql(['hello']);
            expect(operation('test')([])).to.eql(['test']);
            expect(operation('cat')([0, 'tammy'])).to.eql([0, 'tammy', 'cat']);
            expect(operation('dog', 22)(['bill'])).to.eql(['bill', 'dog', 22]);
        });
        it('sets a default on invalid data', function () {
            expect(operation()(undefined)).to.eql([]);
            expect(operation()('string')).to.eql([]);
            expect(operation('cat')(undefined)).to.eql(['cat']);
            expect(operation('dog')(2)).to.eql(['dog']);
        });
    });
    describe('AddToSet', function () {
        const operation = $.Array.AddToSet;
        it('appends items to an array if missing', function () {
            expect(operation()(['hello'])).to.eql(['hello']);
            expect(operation('test')([])).to.eql(['test']);
            expect(operation('cat')([0, 'tammy'])).to.eql([0, 'tammy', 'cat']);
            expect(operation('dog', 22)([22, 'bill', 'bill'])).to.eql([22, 'bill', 'bill', 'dog']);
        });
        it('sets a default on invalid data', function () {
            expect(operation()(undefined)).to.eql([]);
            expect(operation()('string')).to.eql([]);
            expect(operation('cat')(undefined)).to.eql(['cat']);
            expect(operation('dog')(2)).to.eql(['dog']);
        });
    });
    describe('Splice', function () {
        const operation = $.Array.Splice;
        it('splices an array', function () {
            expect(operation()(['hello'])).to.eql(['hello']);
            expect(operation(3, 0, 'test')([])).to.eql(['test']);
            expect(operation(2, 0, 'cat')([0, 'foo', 'tammy'])).to.eql([0, 'foo', 'cat', 'tammy']);
            expect(operation(1, 2, 'cat')([0, 'foo', 'tammy'])).to.eql([0, 'cat']);
            expect(operation(1, 0, 'dog', 22)(['bill'])).to.eql(['bill', 'dog', 22]);
        });
        it('sets a default on invalid data', function () {
            expect(operation()(undefined)).to.eql([]);
            expect(operation(3, 0, 'test')('string')).to.eql(['test']);
            expect(operation(2, 0, 'cat')(undefined)).to.eql(['cat']);
            expect(operation(1, 2, 'cat')(undefined)).to.eql(['cat']);
            expect(operation(1, 0, 'dog')(2)).to.eql(['dog']);
        });
    });
    describe('Map', function () {
        const operation = $.Array.Map;
        it('runs the provided function for each item', function () {
            expect(operation()(['hello'])).to.eql([undefined]);
            expect(operation(value => value + 'test')(['hmm', 'hm'])).to.eql(['hmmtest', 'hmtest']);
            expect(operation(value => 'cat')([0, 'tammy'])).to.eql(['cat', 'cat']);
            expect(operation(value => ['dog', 22])(['bill'])).to.eql([['dog', 22]]);
        });
        it('sets a default on invalid data', function () {
            expect(operation()(undefined)).to.eql([]);
            expect(operation(value => value + 'test')('string')).to.eql([]);
            expect(operation(value => 'cat')(undefined)).to.eql([]);
            expect(operation(value => ['dog', 22])(2)).to.eql([]);
        });
    });
});
