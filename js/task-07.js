// Напиши скрипт, який реагує на зміну значення input#font - size - control(подія input)
// і змінює інлайн - стиль span#text, оновлюючи властивість font - size.В результаті, перетягуючи повзунок,
//   буде змінюватися розмір тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const inp = document.querySelector('#font-size-control');
console.log(inp)
const inpText = document.querySelector('#text')
console.log(inpText)


inp.addEventListener('input', (event) =>
  inpText.style.fontSize = event.currentTarget.value+"px")