// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let chars = {};
  let max = 0,
    maxChara = '';
  for (let char of str) chars[char] = chars[char] + 1 || 1;
  for (let char in chars) {
    chars[char] > max ? ((max = chars[char]), (maxChara = char)) : null;
  }
  return maxChara;
}

module.exports = maxChar;
