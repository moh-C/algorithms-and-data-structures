// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// My Own Solution which is neat!
function reverseInt(n) {
  return n == 0
    ? 0
    : Math.sign(n) *
        parseInt(
          n
            .toString()
            .split('')
            .map(val => (val === '-' ? (val = '') : (val = val)))
            .reverse()
            .map(val => (val === '0' ? (val = '') : (val = val)))
            .join('')
        );
}

module.exports = reverseInt;
