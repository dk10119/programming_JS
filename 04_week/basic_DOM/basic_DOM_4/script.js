let pancakeType = document.querySelector("#type"); //find the type
let toppingExtra = document.querySelectorAll("input"); //find toppings list
function changePrice() {
  let totalPrice = Number(pancakeType.value); //set total price = value of cake type
  for (let i = 0; i < toppingExtra.length; i++) {
    toppingExtra[i].checked
      ? (totalPrice += Number(toppingExtra[i].value))
      : null;
  } //increase the total price for each checked toppings
  let displayTotalPrice = document.querySelectorAll(".totalPrice"); //find the displayed price
  for (let i = 0; i < displayTotalPrice.length; i++) {
    displayTotalPrice[i].textContent = totalPrice;
  } // change all the displayed price
}
pancakeType.addEventListener("change", changePrice); // event listener for type change
toppingExtra.forEach(function (checkbox) {
  checkbox.addEventListener("change", changePrice);
}); // multiple event listeners for each check box change
