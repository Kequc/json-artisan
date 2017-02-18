'use strict';
const mocha = require('mocha');
const expect = require('chai').expect;

const jsonExtend = require('../lib/json-extend');

describe('jsonExtend', function () {
    describe('empty', function () {
        it('returns empty objct on no valid input', function () {
            expect(jsonExtend()).to.eql({});
            expect(jsonExtend(1, 2)).to.eql({});
            expect(jsonExtend('hi', 'oops')).to.eql({});
            expect(jsonExtend(null, null)).to.eql({});
            expect(jsonExtend(['10'], ['11'])).to.eql({});
        });
        it('does not break on empty target', function () {
            const source = { hello: 0 };
            const result = jsonExtend(undefined, source);
            expect(result).to.eql(source);
        });
        it('does not break on non-object target', function () {
            const source = { hello: 1 };
            const result = jsonExtend('foo', source);
            expect(result).to.eql(source);
        });
        it('sets null', function () {
            const target = { hello: 'temp' };
            const source = { hello: null };
            const result = jsonExtend(target, source);
            expect(result).to.equal(target);
            expect(result).to.eql(source);
        });
        it('removes undefined values', function () {
            const target = { existing: 'data' };
            const source = { hello: 0, cat: 'dog', existing: undefined };
            const result = jsonExtend(target, source);
            expect(result).to.equal(target);
            expect(result).to.eql({ hello: 0, cat: 'dog' });
        });
    });
    describe('object', function () {
        it('merges the source with the target', function () {
            const target = { existing: 'data' };
            const source = { hello: 0, cat: 'dog', existing: 'overwritten' };
            const result = jsonExtend(target, source);
            expect(result).to.equal(target);
            expect(result).to.eql({ existing: 'overwritten', hello: 0, cat: 'dog' });
        });
        it('deep merges the source with the target', function () {
            const target = { existing: 'data', deep: { hey: 'there!', num: 21 } };
            const source = { hello: 0, cat: 'dog', deep: { hey: 'overwritten' } };
            const result = jsonExtend(target, source);
            expect(result).to.equal(target);
            expect(result).to.eql({ existing: 'data', hello: 0, cat: 'dog', deep: { hey: 'overwritten', num: 21 } });
        });
        it('overwrites arrays with objects', function () {
            const target = { existing: ['data'] };
            const source = { existing: { hmm: 'overwritten' } };
            const result = jsonExtend(target, source);
            expect(result).to.equal(target);
            expect(result).to.eql(source);
        });
    });
    describe('array', function () {
        it('overwrites a target non-array', function () {
            const target = { array: 200 };
            const source = { array: ['new one', 11] };
            const result = jsonExtend(target, source);
            expect(result).to.equal(target);
            expect(result).to.eql(source);
        });
        it('overwrits a target array with source', function () {
            const target = { array: ['hello', 'there'] };
            const source = { array: ['new'] };
            const result = jsonExtend(target, source);
            expect(result).to.equal(target);
            expect(result).to.eql(source);
        });
        it('overwrites a target array even when deep', function () {
            const target = { array: [{ deep: 'object', number: 21 }] };
            const source = { array: [{ deep: 'overwritten' }] };
            const result = jsonExtend(target, source);
            expect(result).to.equal(target);
            expect(result).to.eql(source);
        });
    });
    describe('function', function () {
        it('delivers the old value', function () {
            const old = 'hi';
            const func = (value) => {
                expect(value).to.equal(old);
            };
            jsonExtend({ old }, { old: func });
        });
        it('delivers arrays', function () {
            const old = { what: 'up' };
            const func = (value) => {
                expect(value).to.equal(old);
            };
            jsonExtend({ old }, { old: func });
        });
        it('delivers objects', function () {
            const old = ['array content', 111];
            const func = (value) => {
                expect(value).to.equal(old);
            };
            jsonExtend({ old }, { old: func });
        });
        it('runs inside arrays with undefined', function () {
            const func = (value) => {
                expect(value).to.equal(undefined);
            };
            jsonExtend({ old: ['no'] }, { old: [func] });
        });
    });
});
