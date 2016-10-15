'use strict';

const cryptoJS = require('crypto-js');

const randomWordArr = (length) => cryptoJS.lib.WordArray.random(length)
  , base64String = (wordArr) => cryptoJS.enc.Base64.stringify(wordArr);

module.exports = {
  genSalt: (length) => base64String(randomWordArr(length)),
  sha256Digest: (string) => cryptoJS.SHA256(string).toString(cryptoJS.enc.Hex)
}
