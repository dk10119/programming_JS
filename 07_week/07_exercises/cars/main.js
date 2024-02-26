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
    const inputs = document.querySelectorAll("input");
    let inputValues = [];
    for (input of inputs) {
      inputValues.push(input.value);
      if (input.value == "") throw new Error("Please fill all fields!");
    }
    cars.push(new Car(...inputValues));
    addRow(inputValues, 0);
  } catch (error) {
    document.querySelector("#error_msg").textContent = error.message;
  }
  event.target.reset();
}

function updateDatabase() {
  for (car of cars) {
    addRow(Object.values(car), -1);
  }
}
updateDatabase();

document.querySelector(".car_form").addEventListener("submit", addNewCar);
