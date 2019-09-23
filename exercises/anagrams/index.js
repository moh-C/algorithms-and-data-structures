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
  firstObj = objectifier(stringA);
  secondObj = objectifier(stringB);
  let firstArr = iterator(firstObj);
  let secondArr = iterator(secondObj);
  return firstArr == secondArr;
}

function iterator(obj) {
  let arr = [];
  for (let char in obj) {
    arr.push(char);
  }
  return arr.sort().join('');
}

function objectifier(str) {
  let charMap = {};
  for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
}

console.log(anagrams('hello', 'llohe'));

module.exports = anagrams;
