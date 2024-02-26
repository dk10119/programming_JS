let cars = [];

function Car(plate, maker, model, owner, price, color) {
  this.plate = plate;
  this.maker = maker;
  this.model = model;
  this.owner = owner;
  this.price = price;
  this.color = color;
}

function addNewCar(event) {
  event.preventDefault();
  cars = [];

  try {
    const inputs = document.querySelectorAll("input");
    let inputValues = [];
    for (input of inputs) {
      inputValues.push(input.value);
      if (input.value == "") throw new Error("Please fill all fields!");
    }
    cars.push(new Car(...inputValues));
    updateDatabase();
  } catch (error) {
    document.querySelector("#error_msg").textContent = error.message;
  }
  event.target.reset();
}

function updateDatabase() {
  const table = document.querySelector(".car_table");
  for (car of cars) {
    const tr = document.createElement("tr");
    tr.className = "car_table_head car_table_li";
    for (const [key, value] of Object.entries(car)) {
      const td = document.createElement("td");
      td.textContent = value;
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
}

document.querySelector(".car_form").addEventListener("submit", addNewCar);
