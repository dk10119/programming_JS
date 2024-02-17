const ul = document.querySelector("#container");
let bool = false;

const addInput = () => {
  const li = document.createElement("li");
  const input = document.createElement("input");
  input.type = "text";
  li.appendChild(input);
  ul.prepend(li);
  if (bool == true);
};
// let startInput;
const restart = () => {
  ul.innerHTML = "";
  stop();
  globalThis.startInput = setInterval(addInput, 1000);
};

const stop = () => {
  clearInterval(startInput);
};

document.querySelector("#stop").addEventListener("click", stop);
document.querySelector("#restart").addEventListener("click", restart);
restart();
