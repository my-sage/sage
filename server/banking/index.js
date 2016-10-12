'use strict';
const amex = require('./amex');
const chase = require('./chase');

const bankHandlers = {
  amex,
  chase
}

module.exports = bankHandlers;
