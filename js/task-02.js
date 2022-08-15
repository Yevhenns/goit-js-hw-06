const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// for (let i = 0; i < ingredients.length; i += 1) {
// 	let li = document.createElement('li');
//   li.textContent = ingredients[i];
//   li.classList.add("item");
//   document.querySelector("#ingredients").appendChild(li);
// };
const list = document.querySelector("#ingredients");
const markup = ingredients
  .map((ingredient) => `<li class="item">${ingredient}</li>`)
  .join("");
  list.innerHTML = markup;