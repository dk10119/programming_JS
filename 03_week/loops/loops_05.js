// Develop a program that continuously prompts the user to input numbers until the user enters 0, at which point the program terminates. After termination, the program should calculate and display the average of all the entered numbers.

let sum = 0;
let count = 0;
let num;
let nNaN = 0;
let string = "";
while (num != 0) {
  num = Number(
    prompt("Input a number. Enter 0 to end the program and return the average.")
  );
  if (isNaN(num)) {
    nNaN++;
  } else {
    sum += num;
    count++;
  }
}
let average = (sum / count).toFixed(4);
if (nNaN == 1) {
  string = " There is one input that is not a number.";
} else if (nNaN > 1) {
  string = " There is " + nNaN + " inputs that are not a number.";
}
alert(
  "The arithmetic average of the " +
    count +
    " number input(s) are: " +
    average +
    "." +
    string
);
