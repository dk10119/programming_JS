let cars = [];
const table = document.querySelector(".car_table");

function Car(plate, maker, model, owner, price, color) {
  this.plate = plate;
  this.maker = maker;
  this.model = model;
  this.owner = owner;
  this.price = price;
  this.color = color;
}

const addRow = (arr, index) => {
  const row = table.insertRow(index);
  for (value of arr) {
    const cell = row.insertCell(-1);
    cell.textContent = value;
  }
};

function addNewCar(event) {
  event.preventDefault();
  try {
    document.querySelector("#error_msg").textContent = "";
    const inputs = document.querySelectorAll("input");
    let inputValues = [];
    for (input of inputs) {
      inputValues.push(input.value);
      if (input.value == "") throw new Error("Please fill all fields!");
    }
    cars.push(new Car(...inputValues));
    addRow(inputValues, 1);
  } catch (error) {
    document.querySelector("#error_msg").textContent = error.message;
  }
  event.target.reset();
}

fetch("cars.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((car) => addRow(Object.values(car), -1));
    cars.push(...data);
  });

document.querySelector(".car_form").addEventListener("submit", addNewCar);
