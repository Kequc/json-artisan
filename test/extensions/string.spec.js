'use strict';
const mocha = require('mocha');
const expect = require('chai').expect;

const $ = require('../../lib/extensions');

describe('String extension', function () {
    describe('append', function () {
        const operation = $.String.append;
        it('appends a string', function () {
            expect(operation()('hello')).to.equal('hello');
            expect(operation()('test')).to.equal('test');
            expect(operation('tammy')('cat')).to.equal('cattammy');
            expect(operation('bill')('dog')).to.equal('dogbill');
        });
        it('appends a string with separator', function () {
            expect(operation(undefined, '-')('hello')).to.equal('hello-');
            expect(operation(undefined, '/')('test')).to.equal('test/');
            expect(operation('tammy', ', ')('cat')).to.equal('cat, tammy');
            expect(operation('bill', '>')('dog')).to.equal('dog>bill');
        });
        it('sets a default on invalid data', function () {
            expect(operation()(undefined)).to.equal('');
            expect(operation()(11)).to.equal('');
            expect(operation('tammy')(undefined)).to.equal('tammy');
            expect(operation('bill')(['dog'])).to.equal('bill');
        });
    });
    describe('prepend', function () {
        const operation = $.String.prepend;
        it('prepends a string', function () {
            expect(operation()('hello')).to.equal('hello');
            expect(operation()('test')).to.equal('test');
            expect(operation('tammy')('cat')).to.equal('tammycat');
            expect(operation('bill')('dog')).to.equal('billdog');
        });
        it('prepends a string with separator', function () {
            expect(operation(undefined, '-')('hello')).to.equal('-hello');
            expect(operation(undefined, '/')('test')).to.equal('/test');
            expect(operation('tammy', ', ')('cat')).to.equal('tammy, cat');
            expect(operation('bill', '>')('dog')).to.equal('bill>dog');
        });
        it('sets a default on invalid data', function () {
            expect(operation()(undefined)).to.equal('');
            expect(operation()(11)).to.equal('');
            expect(operation('tammy')(undefined)).to.equal('tammy');
            expect(operation('bill')(['dog'])).to.equal('bill');
        });
    });
});
