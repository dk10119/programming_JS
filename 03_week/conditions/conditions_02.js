/*
Create a program getTemperature that asks the user to input a temperature in Celsius and then outputs whether they should wear a jacket (if the temperature is below 15°C) or not.
 */
//
function getTemperature(Number) {
  if (Number < 15) {
    return "You should wear a jacket";
  } else {
    return "You don't need to wear a jacket";
  }
}

getTemperature(Number(prompt("What is the current temperature?")));

//need to copy and paste this code to browser console to run. Margit not mention this in the material. Thanks Adel for pointing it out.
