// Develop a program that initially asks the user for a single number. Following this, the program should inquire if the user wishes to continue providing numbers with the prompt: 'Do you want to continue giving numbers? (y/n)'. If the user responds with 'y', the program will request another number. If the response is 'n', the program terminates. Upon termination, it calculates and displays the average of all entered numbers.

//define some objects
let sum = 0;
let count = 0;
let num;
let nNaN = 0;
let string = "";
let query = "y";

//loop prompt for a number
do {
  num = Number(prompt("Input a number."));
  if (isNaN(num)) {
    nNaN++; //filter out and count if user give a string
  } else {
    sum += num; //add the number to the total sum
    count++; //count how many number given
  }

  //loop prompt user if they want to give more number
  do {
    query = String(prompt("Do you want to add another number? (y/n)"));
    if (query == "y" || query == "n") {
      break;
    }
  } while (string !== "I love coding xoxo");
} while (query == "y");

let average = (sum / count).toFixed(4); //calculate average and cut the float

if (nNaN == 1) {
  string = " There is one input that is not a number.";
} else if (nNaN > 1) {
  string = " There are " + nNaN + " inputs that are not a number.";
} //prepare a string to tell user how many bad input they gave

alert(
  "The arithmetic average of the " +
    count +
    " number input(s) are: " +
    average +
    "." +
    string
); //return the average
