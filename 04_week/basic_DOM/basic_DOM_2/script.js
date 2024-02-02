/* 

Write JavaScript code that adds an event listener to the button.

When the button is clicked, the function should:
- Retrieve the value from the input field.
- Create a new <li> element and set its text content to the input field's value.
- Append the new <li> element to the fruitList <ul>.

Ensure the input field is cleared after adding the fruit to the list.

*/
const button = document.querySelector("#addFruitBtn"); //get the button

function clearText() {
  document.querySelector("#fruitInput").value = "";
} //function to clear the input field

function getInput() {
  let fruitInput = document.querySelector("#fruitInput").value; //get the input

  let li = document.createElement("li");
  li.appendChild(document.createTextNode(fruitInput)); //create the new <li> element with the input text

  let fruitList = document.querySelector("#fruitList"); //get the <ul> list

  fruitList.appendChild(li); //add the new <li> elemenet to the <ul> list
  clearText();
}

button.addEventListener("click", getInput); // button activation
