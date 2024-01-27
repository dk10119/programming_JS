// Create a program that continuously prompts the user to input distance (in kilometers) and time (in hours) and then calculates the average speed. The program should terminate when the user enters 0 for the distance. Upon receiving a distance of 0, the program should not prompt for any further input.

/**
let d;
while (d != 0) {
  d = prompt("Enter the distant. (Enter 0 to end the program)");
  if (d == 0) {
    break;
  } else {
    let t = prompt("Enter the time.");
    if (d >= 0 || t > 0) {
      alert("Average speed is " + d / t);
    } else {
    
    }
  }
}
 */

let d;
let t;
while (d != 0) {
  d = prompt("Enter the distant. (Enter 0 to end the program");
  if (d == 0) {
    break;
  } else if (d < 0 || isNaN(d)) {
    alert("Invalid input of distant value. Try again!");
  } else {
    let t = prompt("Enter the time.");
    if (t <= 0 || isNaN(t)) {
      alert("Invalid input of time value. Try again!");
    } else {
      v = (d / t).toFixed(4);
      alert("Average velocity is: " + v);
    }
  }
}
