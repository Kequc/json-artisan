'use strict';
const jsonExtend = require('./lib/json-extend');
const $ = require('./lib/extensions');

jsonExtend.$ = $;

module.exports = jsonExtend;
