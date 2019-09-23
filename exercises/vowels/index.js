// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// -----------------------------------------------------
// Built in function which is, no wonder, slower!
function vowels(str) {
  let match = str.match(/[aieuo]/gi);
  return match ? match.length : 0;
}

// -----------------------------------------------------
// Solution by Iteration (Faster)
/*
function vowels(str) {
  vowel = 'eaoiu';
  let number = 0;
  for (let i of str.toLowerCase()) {
    if (vowel.includes(i)) number++;
  }
  return number;
}
*/

module.exports = vowels;
