// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let rev = '';
  for (let char of str) {
    rev = char + rev;
  }
  return rev;
}

console.log(reverse('hello'));

module.exports = reverse;

//function reverse(str) {
//  return str
//    .split('')
//    .reverse()
//    .join('');
//}
