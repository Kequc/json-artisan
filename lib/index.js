'use strict';
const jsonArtisan = require('./json-artisan');
const whatIsIt = require('./util/what-is-it');
const $ = require('./extensions');

jsonArtisan.$ = $;
jsonArtisan.whatIsIt = whatIsIt;

module.exports = jsonArtisan;
