'use strict';
const objectExtend = require('./lib/object-extend');
const $ = require('./lib/extensions');

objectExtend.$ = $;

module.exports = objectExtend;
