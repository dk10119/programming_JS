"use strict";
const addCarForm = document.querySelector("#add_car_form");
const searchCarForm = document.querySelector("#search_car_form");
const cars = [];

class Car {
  constructor(license, maker, model, owner, price, color) {
    this.license = license;
    this.maker = maker;
    this.model = model;
    this.owner = owner;
    this.price = price;
    this.color = color;
  }
}

const addCar = (event) => {
  event.preventDefault();
  const license = document.querySelector("#license").value;
  const maker = document.querySelector("#maker").value;
  const model = document.querySelector("#model").value;
  const owner = document.querySelector("#owner").value;
  const price = document.querySelector("#price").value;
  const color = document.querySelector("#color").value;
  const newCar = new Car(license, maker, model, owner, price, color);
  cars.push(newCar);
  event.target.reset();
  displayTable();
};

const displayTable = () => {
  const table = document.querySelector("#cars_table");
  table.innerHTML = table.rows[0].innerHTML;
  cars.forEach((car) => {
    const row = table.insertRow(-1);
    Object.values(car).forEach((text) => {
      const cell = row.insertCell(-1);
      cell.textContent = text;
    });
  });
};

const searchCar = (event) => {
  event.preventDefault();
  const licenseQuery = document.querySelector("#search").value.toString().toLowerCase().trim();
  const displaySearch = document.querySelector("#search_result");
  if (!licenseQuery) {
    displaySearch.textContent = "Please enter a license plate to search";
    return;
  }
  try {
    const result = cars.find(({ license }) => license.toLowerCase().includes(licenseQuery));
    displaySearch.textContent = result ? `Found ${result.maker}, ${result.model} owned by ${result.owner}` : `No car with that license plate`;
  } catch (error) {
    console.error("Error occured: ", error);
    displaySearch.textContent = "Something went wrong, please try again!";
  }
};

addCarForm.addEventListener("submit", addCar);
searchCarForm.addEventListener("submit", searchCar);
