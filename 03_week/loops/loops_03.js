// Create a program that continuously prompts the user to input distance (in kilometers) and time (in hours) and then calculates the average speed. The program should terminate when the user enters 0 for the distance. Upon receiving a distance of 0, the program should not prompt for any further input.

do {
  let d = prompt("Enter the distant. (Enter 0 to end the program)");
  let t = prompt("Enter the time.");
  alert("Average speed is " + d / t);
} while (d !== 0);
