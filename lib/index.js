'use strict';
const jsonArtisan = require('./lib/json-artisan');
const $ = require('./lib/extensions');

jsonArtisan.$ = $;

module.exports = jsonArtisan;
