let cars = [];
const table = document.querySelector("#car_table");
const search = document.querySelector("#search");

function Car(plate, maker, model, owner, price, color) {
  this.plate = plate;
  this.maker = maker;
  this.model = model;
  this.owner = owner;
  this.price = price;
  this.color = color;
}

const addRow = (arr, location, index) => {
  const row = location.insertRow(index);
  for (value of arr) {
    const cell = row.insertCell(-1);
    cell.textContent = value;
  }
};

function addNewCar(event) {
  event.preventDefault();
  try {
    document.querySelector("#error_msg").textContent = "";
    const inputs = document.querySelectorAll(".car_form > input");
    let inputValues = [];
    for (input of inputs) {
      inputValues.push(input.value);
      if (input.value == "") throw new Error("Please fill all fields!");
    }
    cars.push(new Car(...inputValues));
    addRow(inputValues, table, 1);
  } catch (error) {
    document.querySelector("#error_msg").textContent = error.message;
  }
  event.target.reset();
}

function searchCar() {
  const searchTable = document.querySelector("#car_table_search");
  const searchType = document.querySelector("#search_type").value;
  const searchTerm = search.value.toLowerCase();
  const result = cars.filter((car) =>
    car[searchType].toLowerCase().includes(searchTerm)
  );
  if (searchTerm == "") {
    searchTable.style.display = "none";
    table.style.display = "";
  } else {
    table.style.display = "none";
    searchTable.style.display = "";
  }
  searchTable.innerHTML = "";
  result.forEach((car) => addRow(Object.values(car), searchTable, -1));
  if (result.length == 0) addRow(["Not found"], searchTable, -1);
}

fetch("cars.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((car) => addRow(Object.values(car), table, -1));
    cars.push(...data);
  });

document.querySelector(".car_form").addEventListener("submit", addNewCar);
document.querySelector(".search_bar").addEventListener("input", searchCar);
