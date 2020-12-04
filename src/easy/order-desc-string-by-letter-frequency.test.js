'use strict';

const Code = require('@hapi/code');
const Lab = require('@hapi/lab');

const orderDescStringByLetterFrequency = require('./order-desc-string-by-letter-frequency');

const { expect } = Code;
const { it } = (exports.lab = Lab.script());

// Given a string, sort it in decreasing order based on the frequency of characters. If there are multiple possible solutions, return any of them.
// For example, given the string tweet, return tteew. eettw would also be acceptable.

it('sorts in decreasing order a string based on the frequency of characters', () => {
  const input = 'tweet';
  const result = orderDescStringByLetterFrequency(input);

  expect(result).to.satisfy(value => value === 'tteew' || value === 'eettw');
});
