'use strict';
const jsonArtisan = require('./json-artisan');
const $ = require('./extensions');

jsonArtisan.$ = $;

module.exports = jsonArtisan;
