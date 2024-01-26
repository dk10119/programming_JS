// Develop a program that outputs all even, positive numbers less than 100 in the following pattern: 2, 98, 4, 96, 6, 94, and so on, up to the last number before 100. Display the result in a single line.

let s = "";
for (let x = 2; x < 100; x += 2) {
  s += x + " " + (100 - x) + " ";
}
console.log(s);
