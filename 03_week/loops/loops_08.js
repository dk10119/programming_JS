// Develop a program that initially asks the user how many numbers they wish to input. After receiving this information, the program should then prompt the user to enter each of these numbers. Once all numbers have been entered, the program should determine and display the smallest and biggest number provided by the user.

//define all the global objects
let query;
let askString = "How many numbers do you want to add?";
let max = undefined;
let min = undefined;
let num;
let nNaN = 0;
let minMaxString = "";

//ask user how many number they want and loop if they not giving a number
do {
  Number((query = prompt(askString)));
  if (isNaN(query)) {
    askString =
      "That is not a number! Try again. How many numbers do you want to add?"; //remind user to input a number
  }
} while (isNaN(query));

//loop prompt to get all the numbers input
for (let i = query; i > 0; i--) {
  num = Number(
    prompt(
      "Enter a number. " +
        (query - i) +
        " out of " +
        query +
        " number(s) entered." //tell user how many number they enter and how many left
    )
  );

  //calculate the max and min values
  if (isNaN(num)) {
    nNaN++; //just to count all the "not a number" values given
  } else if (max == undefined) {
    max = num;
    min = num; //this condition is to give the max min its first value to compare with later values.
  } else {
    num > max ? (max = num) : null; //this condition will compare and write down the biggest value
    num < min ? (min = num) : null; //same but for smallest value
  }
}

//just prepare a string for the alert part so I dont have to write it down multiple time.
minMaxString =
  "Out of " +
  query +
  " input(s), the biggest value is " +
  max +
  ", the smallest value is " +
  min +
  ".";

if (query == 0) {
  alert("There is no inputs so I can't find the biggest and smallest numbers."); //in case user not giving any input
} else if (max == undefined) {
  alert(
    "Your input(s) is not a number so I can't find the biggest and smallest numbers." //in case user not giving any number
  );
} else if (nNaN == 0) {
  alert(minMaxString); //ideal outcomes
} else if (nNaN == 1) {
  alert(minMaxString + " There is one input that is not a number."); //in case user give a string
} else if (nNaN > 1) {
  alert(minMaxString + " There are " + nNaN + " inputs that are not a number."); //in case user give multiple strings
}
