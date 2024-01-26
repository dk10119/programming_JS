// Create a Magic 8-Ball program that emulates the classic fortune-telling toy. The user will input a yes-or-no question, and the program will output a random response from the 8-Ball. Implement the program using conditional statements to select and display one of several predefined responses.

const randomNumber = (number) => {
  return Math.floor(Math.random() * number + 1);
};

switch (randomNumber(10)) {
  case 1:
    console.log("Can't predict now, I'm napping.");
    break;
  case 2:
    console.log("Yes but ask again after taco Tuesday.");
    break;
  case 3:
    console.log("Reply hazy, ask your horoscope.");
    break;
  case 4:
    console.log("Definitely maybe, but on a leap year.");
    break;
  case 5:
    console.log("Outlook fuzzy, like a pixelated cat video.");
    break;
  case 6:
    console.log("Yes, if you dance like no one's watching.");
    break;
  case 7:
    console.log("No way, unless penguins become astronauts.");
    break;
  case 8:
    console.log("Yes but ask a fortune cookie for a second opinion.");
    break;
  case 9:
    console.log("As likely as finding a needle in a haystack.");
    break;
  case 10:
    console.log("My sources say 'ask Siri, I'm on vacation.'");
    break;
}
