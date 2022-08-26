const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("#ingredients");
const listItems = [];
for (let i = 0; i < ingredients.length; i += 1) {
	let ingrLi = document.createElement('li');
  ingrLi.textContent = ingredients[i];
  ingrLi.classList.add("item");
  listItems.push(ingrLi);
};
list.append(...listItems);
