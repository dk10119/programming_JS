// Initial array of team members
let teamMembers = ["John", "Emily", "Mike", "Sarah"];

// Exercise 1: Loop through `teamMembers` and log each name to the console.
// Write your code here:

teamMembers.forEach((member) => console.log(member));

// Exercise 2: Remove the first member of the array.
// Write your code here:

console.log(teamMembers.slice(1));

// Exercise 3: Remove the last member of the array.
// Write your code here:

console.log(teamMembers.slice(0, -1));

// Exercise 4: Add a new member "Alex" to the front of the array.
// Write your code here:

console.log(teamMembers.toSpliced(0, 0, "Alex"));

// Exercise 5: Append a new member "Linda" to the end of the array.
// Write your code here:

console.log(teamMembers.concat("Linda"));

// Exercise 6: Create a new array that excludes the first two members.
// Write your code here:

console.log(teamMembers.slice(2));

// Exercise 7: Find the index of "Mike" in the array.
// Write your code here:

console.log(teamMembers.indexOf("Mike"));

// Exercise 8: Try to find the index of "Jake" (who is not in the array).
// Write your code here:

console.log(teamMembers.indexOf("Jake"));

// Exercise 9: Use `splice` to remove "Mike" and add "Carol" and "Bruce" in his place.
// Write your code here:

console.log(
  teamMembers.toSpliced(teamMembers.indexOf("Mike"), 1, "Carol", "Bruce")
);

// Exercise 10: Concatenate a new member "Bob" to the end of the array and create a new array.
// Write your code here:

console.log(teamMembers.concat("Bob"));

// Exercise 11: Using `slice` to Copy the Entire Array
// Write your code here:

console.log(teamMembers.slice(0));

// Exercise 12: Combining Arrays with `concat`
// Assume `newMembers` array is defined
let newMembers = ["Tina", "Dean"];
// Write your code here:

console.log(teamMembers.concat(newMembers));

// Exercise 13: Finding all occurrences of a John
// Write your code here:

console.log(teamMembers.filter((member) => member == "John"));

// Exercise 14: Transforming members with `map` to be all written uppercase
// Write your code here:

// let upperCaseTeamMembers = teamMembers.map((member) => member.toUpperCase);
// console.log(upperCaseTeamMembers);

console.log(teamMembers.map((member) => member.toUpperCase()));
