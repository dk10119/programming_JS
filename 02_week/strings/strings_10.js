/**
Refine the capitalize function to ensure it capitalizes the first letter of the name parameter provided to it.
 */

function capitalize(word) {
  let wordLowerCase = word.toLowerCase();
  let initialUpperCase = word[0].toUpperCase();
  let wordNoInitial = wordLowerCase.substring(1);
  return initialUpperCase + wordNoInitial;
}

// Sample usage - do not modify
console.log(capitalize("sam")); // "Sam"
console.log(capitalize("ALEX")); // "Alex"
console.log(capitalize("chARLie")); // "Charlie"
