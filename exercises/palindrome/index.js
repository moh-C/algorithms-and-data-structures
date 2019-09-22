// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

//--------------------------------------------------------------------
// Using Array.every() helper function
function palindrome(str) {
  return str.split('').every((val, i) => val === str[str.length - i - 1]);
}

//---------------------------------------------------------------------
// Using External Things!
/*
const reverse = require('../reversestring/index');
function palindrome(str) {
    return str === reverse(str);
}
*/

module.exports = palindrome;
