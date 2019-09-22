// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// -------------------------------------------------
// Using the Map Array Helper
function reverse(str) {
  let rev = '';
  str.split('').map(val => (rev = val + rev));
  return rev;
}

// -------------------------------------------------
// Using Reduce Array Helper
/*
function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
}
*/

// -------------------------------------------------
// Slow Implementation
/*
function reverse(str) {
  let rev = '';
  for (let char of str) {
    rev = char + rev;
  }
  return rev;
}
*/

// -------------------------------------------------
// Fast Implementation
/*
function reverse(str) {
  return str
    .split('')
    .reverse()
    .join('');
}
*/

module.exports = reverse;

/* 
------------------------------------------------------------------------------
I would Highly recommend you read this 4 articles:
https://codeburst.io/learn-understand-javascripts-map-function-ffc059264783
https://codeburst.io/learn-understand-javascripts-filter-function-bde87bce206
https://codeburst.io/learn-understand-javascripts-reduce-function-b2b0406efbdc
https://codeburst.io/javascript-learn-to-chain-map-filter-and-reduce-acd2d0562cd4
------------------------------------------------------------------------------
*/
