const form = document.querySelector(".form-container");
const button = document.querySelector("button");
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const typeSelect = document.querySelector("#type");
let toppings = [];
let extras = [];
let total = 5;

const pancakePriceCalc = () => {
  const totalPriceElement = document.querySelector("#totalPrice");
  const priceBanner = document.querySelector(".price-banner");

  total = parseInt(typeSelect.value);

  priceBanner.animate(
    [
      { transform: "scale(1)" },
      { transform: "scale(1.05)" },
      { transform: " scale(1)" },
    ],
    {
      duration: 100,
      iterations: 1,
    }
  );
  checkToppings();
  totalPriceElement.textContent = `$${total}`;
};

const addItem = (itemName, category) => {
  if (category === "toppings") {
    toppings.push(itemName);
  } else {
    extras.push(itemName);
  }
};

const removeItem = () => {};

const checkToppings = () => {
  toppings = [];
  extras = [];
  for (const item of checkboxes) {
    const itemName = item.dataset.name;
    const category = item.dataset.category;
    if (item.checked) {
      addItem(itemName, category);
      total += parseInt(item.value);
    } else {
      removeItem();
    }
  }
  // console.log("topping array", toppings);
  // console.log("extras array", extras);
};

const displayOrder = () => {
  const customerName = document.querySelector("#customerName").value;
  const orderType = document.querySelector("#order_type");
  const orderToppings = document.querySelector("#order_toppings");
  const orderExtras = document.querySelector("#order_extras");
  const orderName = document.querySelector("#customer_name");
  const orderPrice = document.querySelector("#order_price");
  orderName.textContent = customerName;
  orderType.textContent = typeSelect.selectedOptions[0].dataset.name;
  orderToppings.textContent = toppings.join(", ");
  orderExtras.textContent = extras.join(", ");
  orderPrice.textContent = total;
  console.log(toppings, "test");
};

form.addEventListener("change", pancakePriceCalc);
button.addEventListener("click", displayOrder);
