'use strict';

const Code = require('@hapi/code');
const Lab = require('@hapi/lab');

const { base64ToHexNodeJS, base64ToHexBrowser } = require('./base64-to-hex');

const { expect } = Code;
const { it } = (exports.lab = Lab.script());

/*
    Write a function to decode a Base64 string back to a hexadecimal string.
    For example, the following string: 3q2+7w==
    should produce: deadbeef
*/

it('should decode a base64 string back to its original hex value (nodejs way)', () => {
  const b64 = '3q2+7w==';
  const result = base64ToHexNodeJS(b64);

  expect(result).to.equal('deadbeef');
});

it('should decode a base64 string back to its original hex value (browser way)', () => {
  const b64 = '3q2+7w==';
  const result = base64ToHexBrowser(b64);

  expect(result).to.equal('deadbeef');
});
