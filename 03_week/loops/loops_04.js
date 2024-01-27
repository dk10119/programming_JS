// Develop a program that requests the user to input 20 numbers. After all numbers are entered, the program should display how many of these numbers are even.

let nNaN = 0;
let nOdd = 0;
let nEven = 0;
for (let i = 0; i < 20; i++) {
  let n = prompt("Input a number. " + (20 - i) + " number(s) left.");
  switch (true) {
    case n % 2 == 1:
      nOdd++;
      break;
    case n % 2 == 0:
      nEven++;
      break;
    default:
      nNaN++;
  }
}

alert(
  "Out of 20 inputs are " +
    nEven +
    " even, " +
    nOdd +
    " odd, " +
    nNaN +
    " not a number."
);
