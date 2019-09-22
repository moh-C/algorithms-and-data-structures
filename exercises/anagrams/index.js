// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  firstMap = objectMapper(stringA);
  secondMap = objectMapper(stringB);
  /*if (Object.keys(firstMap).length === Object.keys(secondMap).length) {
    return false;
  }*/

  for (let char in firstMap) {
    if (!secondMap[char] || firstMap[char] !== secondMap[char]) return false;
  }
  return true;
}

function objectMapper(str) {
  const charMap = {};
  for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
}

console.log(anagrams('hello', 'olleh'));

module.exports = anagrams;
