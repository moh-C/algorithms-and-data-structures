// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  let carr = [];
  for (let i = 0; i < n; i++) {
    let temp = [];
    for (let j = 0; j < 2 * n - 1; j++) {
      j >= Math.floor((2 * n - 1) / 2) - i &&
      j <= Math.floor((2 * n - 1) / 2) + i
        ? temp.push('#')
        : temp.push(' ');
    }
    carr.push(temp.join('').toString());
    debugger;
  }
  console.log(carr.join('\n'));
}

pyramid(20);

module.exports = pyramid;
