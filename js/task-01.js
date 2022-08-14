const categoriesLength = document.querySelector("#categories").children.length;
console.log(`Number of categories: ${categoriesLength}`);

const selectItem = document.querySelector(".item");

const titleItemFirst = selectItem.firstElementChild;
console.log(`Category: ${titleItemFirst.textContent}`);
const itemLengthFirst = selectItem.lastElementChild.children.length;
console.log(`Elements: ${itemLengthFirst}`);


const secondItem = selectItem.nextElementSibling;

const titleItemSecond = secondItem.firstElementChild;
console.log(`Category: ${titleItemSecond.textContent}`);
const itemLengthSecond = selectItem.nextElementSibling.lastElementChild.children.length;
console.log(`Elements: ${itemLengthSecond}`);
console.log();

const titleItemThird = secondItem.nextElementSibling.firstElementChild;
console.log(`Category: ${titleItemThird.textContent}`);
const itemLengthThird = secondItem.nextElementSibling.lastElementChild.children.length;
console.log(`Elements: ${itemLengthThird}`);