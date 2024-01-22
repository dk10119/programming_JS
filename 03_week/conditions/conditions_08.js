/*
Compose a function called pluralize that:

Accepts two arguments: a noun and a number.
Returns a string combining the number and the appropriately pluralized form of the noun, such as '5 cats' or '1 dog'.

 */

//If a word ends in –s, –sh, –ch, –x, or –z, you add –es.

function pluralize(animal, number) {
  ending = animal.slice(-1);
  endingTwoCharacters = animal.slice(-2);
  if (number < 2) {
    return number + " " + animal;
  } else {
    if (
      ending === "s" ||
      ending === "x" ||
      ending === "z" ||
      endingTwoCharacters === "ch" ||
      endingTwoCharacters === "sh"
    ) {
      return number + " " + animal + "es";
    } else {
      return number + " " + animal + "s";
    }
  }
}
//
// function pluralize(animal, number) {
//    ending = animal.slice(-1);
//    endingTwoCharacters = animal.slice(-2);
//    if (number < 2) {
//      return animal;
//    } else {
//    return animal + "s";}
//  }
// this code does not work with some special noun endings. modified code above
//

// Sample usage - do not modify
console.log("I have " + pluralize("cat", 0));
console.log("I have " + pluralize("dog", 1));
console.log("I have " + pluralize("parrot", 7));

// Extra sample usage

console.log("I have " + pluralize("octopus", 8));
console.log("I have " + pluralize("ibex", 4));
console.log("I have " + pluralize("capiz", 2));
console.log("I have " + pluralize("starfish", 5));
console.log("I have " + pluralize("cockroach", 8));
