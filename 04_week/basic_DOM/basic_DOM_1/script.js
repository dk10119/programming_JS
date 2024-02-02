/* 
Write JavaScript code that selects content id by using getElementById.
Write a function which will update the text content of the selected element to "Hello, World!" by clicking the button.
*/

changeText = () => (text.textContent = "“ Hellow, World! „");

const text = document.querySelector("#content"); //select the text
console.log(text.textContent);

const button = document.querySelector("#changeTextButton"); //select the button
console.log(button);
button.addEventListener("click", changeText);
