'use strict';

const cryptoJS = require('crypto-js');
const moment = require('moment');

const randomWordArr = (length) => cryptoJS.lib.WordArray.random(length),
  base64String = (wordArr) => cryptoJS.enc.Base64.stringify(wordArr);

module.exports = {
  genSalt: (length) => base64String(randomWordArr(length)),
  sha256Digest: (string) => cryptoJS.SHA256(string).toString(cryptoJS.enc.Hex),
  encrypt: (message, key) => cryptoJS.AES.encrypt(message, key).toString(),
  decrypt: (encryptedText, key) => cryptoJS.AES.decrypt(encryptedText, key).toString(cryptoJS.enc.Utf8),
  daysAgo: (days) =>  moment().subtract(days, 'days').format('YYYYMMDD'),
  now: () => moment().format('YYYYMMDD'),
}
