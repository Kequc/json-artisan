'use strict';
const mocha = require('mocha');
const expect = require('chai').expect;

const $ = require('../../lib/extensions');

describe('Object extension', function () {
    describe('Set', function () {
        const operation = $.Object.Set;
        it('sets old values undefined', function () {
            expect(operation()({})).to.eql({});
            expect(operation()({ test: 'no' })).to.eql({ test: undefined });
            expect(operation({
                cat: 'tiffany'
            })({
                cat: 'no', deep: { dog: 'rex' }
            })).to.eql({
                cat: 'tiffany', deep: undefined
            });
            expect(operation({
                deep: { dog: 'francey' }
            })({
                cat: 'no', deep: { dog: 'rex', foo: 0 }
            })).to.eql({
                cat: undefined, deep: { dog: 'francey', foo: undefined }
            });
        });
        it('sets a default on invalid data', function () {
            expect(operation()(undefined)).to.eql({});
            expect(operation()('string')).to.eql({});
            expect(operation({
                cat: 'tiffany'
            })(undefined)).to.eql({
                cat: 'tiffany'
            });
            expect(operation({
                deep: { dog: 'francey' }
            })([2])).to.eql({
                deep: { dog: 'francey' }
            });
        });
    });
});
