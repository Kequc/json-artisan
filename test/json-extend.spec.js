'use strict';
const mocha = require('mocha');
const expect = require('chai').expect;

const jsonExtend = require('../lib/json-extend');

describe('jsonExtend', function () {
    describe('objects', function () {
        it('merges the source with the target', function () {
            const target = { existing: 'data' }
            const source = { hello: 0, cat: 'dog', existing: 'overwritten' };
            const result = jsonExtend(target, source);
            expect(result).to.equal(target);
            expect(result).to.eql({ existing: 'overwritten', hello: 0, cat: 'dog' });
        });
        it('removes undefined values', function () {
            const target = { existing: 'data' }
            const source = { hello: 0, cat: 'dog', existing: undefined };
            const result = jsonExtend(target, source);
            expect(result).to.equal(target);
            expect(result).to.eql({ hello: 0, cat: 'dog' });
        });
        it('deep merges the source with the target', function () {
            const target = { existing: 'data', deep: { hey: 'there!', num: 21 } }
            const source = { hello: 0, cat: 'dog', deep: { hey: 'overwritten' } };
            const result = jsonExtend(target, source);
            expect(result).to.equal(target);
            expect(result).to.eql({ existing: 'data', hello: 0, cat: 'dog', deep: { hey: 'overwritten', num: 21 } });
        });
    });
    describe('arrays', function () {
    });
    describe('functions', function () {
    });
});
