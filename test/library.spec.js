'use strict';
const mocha = require('mocha');
const expect = require('chai').expect;

const artisan = require('../lib/index');
const { $ } = artisan;

describe('library', function () {
    let target;
    beforeEach(function () {
        target = {
            hello: [{ what: 'is up', cat: 22 }],
            deep: {
                something: { here: 11 },
                income: {
                    '2016': { nov: 2600, dec: 2600 },
                    '2017': { jan: 2850, feb: 3000, mar: 3000, apr: 3000, may: 3000 }
                },
                auto: 'torus',
                year: 2011,
                cats: ['tammy', 'felix']
            },
            isParent: true,
            canPaint: false,
            name: 'ruddiger',
            age: 27
        };
    });
    it('can deep extend complex objects', function () {
        const source = {
            hello: undefined,
            deep: {
                something: { here: 21, area51: 'ufo' },
                income: { '2017': { jun: 2750 } },
                auto: 'mercedes',
                year: 2015
            },
            canPaint: true
        };
        const expected = {
            deep: {
                something: { here: 21, area51: 'ufo' },
                income: {
                    '2016': { nov: 2600, dec: 2600 },
                    '2017': { jan: 2850, feb: 3000, mar: 3000, apr: 3000, may: 3000, jun: 2750 }
                },
                auto: 'mercedes',
                year: 2015,
                cats: ['tammy', 'felix']
            },
            isParent: true,
            canPaint: true,
            name: 'ruddiger',
            age: 27
        };
        expect(artisan(target, source)).to.eql(expected);
    });
    it('can do neat things with extensions', function () {
        const source = {
            hello: [{ overwritten: 'stuff' }, { hey: '!' }],
            deep: {
                income: $.Object.Set({
                    '2015': { nov: 2600, dec: 2600 },
                    '2016': { jan: 2850, feb: 3000, mar: 3000, apr: 3000, may: 3000, jun: 2750 }
                }),
                cats: $.Array.Map($.String.Append('cat', '-'))
            },
            isParent: $.Boolean.Toggle(),
            age: $.Number.Inc()
        };
        const expected = {
            hello: [{ overwritten: 'stuff' }, { hey: '!' }],
            deep: {
                something: { here: 11 },
                income: {
                    '2015': { nov: 2600, dec: 2600 },
                    '2016': { jan: 2850, feb: 3000, mar: 3000, apr: 3000, may: 3000, jun: 2750 }
                },
                auto: 'torus',
                year: 2011,
                cats: ['tammy-cat', 'felix-cat']
            },
            isParent: false,
            canPaint: false,
            name: 'ruddiger',
            age: 28
        };
        expect(artisan(target, source)).to.eql(expected);
    });
});
