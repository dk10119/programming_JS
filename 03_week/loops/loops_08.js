// Develop a program that initially asks the user how many numbers they wish to input. After receiving this information, the program should then prompt the user to enter each of these numbers. Once all numbers have been entered, the program should determine and display the smallest and biggest number provided by the user.

let query;
let string = "How many numbers do you want to add?";
let max = 0;
let min = 0;
let num;
let nNaN = 0;
let string2 = "";

do {
  Number((query = prompt(string)));
  if (isNaN(query)) {
    string =
      "That is not a number! Try again. How many numbers do you want to add?";
  }
} while (isNaN(query));

for (let i = query; i > 0; i--) {
  num = Number(
    prompt(
      "Enter a number. " +
        (query - i) +
        " out of " +
        query +
        " number(s) entered."
    )
  );
  if (isNaN(num)) {
    nNaN++;
  } else {
    num > max ? (max = num) : 0;
    num < min ? (min = num) : 0;
  }
}

if (nNaN == 1) {
  string2 = " There is one input that is not a number.";
} else if (nNaN > 1) {
  string2 = " There are " + nNaN + " inputs that are not a number.";
}

alert(
  "Out of " +
    query +
    " inputs, the biggest number is " +
    max +
    ", the smallest number is " +
    min +
    "." +
    string2
);
