'use strict';
const mocha = require('mocha');
const expect = require('chai').expect;

const $ = require('../../lib/extensions');

describe('Boolean extension', function () {
    describe('toggle', function () {
        const operation = $.Boolean.toggle;
        it('toogles a boolean', function () {
            expect(operation()(false)).to.equal(true);
            expect(operation()(true)).to.equal(false);
            expect(operation(true)(false)).to.equal(true);
            expect(operation(false)(true)).to.equal(false);
        });
        it('sets a default on invalid data', function () {
            expect(operation()(undefined)).to.equal(true);
            expect(operation()('string')).to.equal(true);
            expect(operation(false)(undefined)).to.equal(false);
            expect(operation(true)([2])).to.equal(true);
        });
    });
});
