'use strict';

const { JSDOM } = require('jsdom');

const { window } = new JSDOM('<html></html>');

exports.base64ToHexNodeJS = base64 => {
  if (typeof base64 !== 'string') {
    return base64;
  }

  return Buffer.from(base64, 'base64').toString('hex');
};

exports.base64ToHexBrowser = base64 => {
  const binary = window.atob(base64);

  let fullHexString = '';
  for (let index = 0; index < binary.length; index++) {
    const hex = binary.charCodeAt(index).toString(16);
    /* This could be the way to do if we wanted to handle characters from 0000 to FFFF
       since every character needs to be encoded on 2 bytes
    */
    // fullHexString +=
    //   hex.length === 4
    //     ? hex
    //     : `${new Array(4 - hex.length).fill('0').join('')}${hex}`;
    fullHexString += hex;
  }

  return fullHexString;
};
