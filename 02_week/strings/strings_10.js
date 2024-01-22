/**
Refine the capitalize function to ensure it capitalizes the first letter of the name parameter provided to it.
 */

function capitalize(word) {
  let wordLowerCase = word.toLowerCase();
  //convert word to lower case
  let initialUpperCase = word[0].toUpperCase();
  //cut the first character out and convert it to upper case
  let wordNoInitial = wordLowerCase.substring(1);
  //cut the string out without the initial
  return initialUpperCase + wordNoInitial;
  //return the upper case initial with the rest of the character in lower case
}

// Sample usage - do not modify
console.log(capitalize("sam")); // "Sam"
console.log(capitalize("ALEX")); // "Alex"
console.log(capitalize("chARLie")); // "Charlie"
