let counterValue = document.querySelector("#value");
let count = 0;

const buttonMinus = document.querySelector('button[data-action="decrement"]');
buttonMinus.addEventListener("click", () => {
  count -= 1;
  counterValue.textContent = count;
});

const buttonPlus = document.querySelector('button[data-action="increment"]');
buttonPlus.addEventListener("click", () => {
  count += 1;
  counterValue.textContent = count;
});