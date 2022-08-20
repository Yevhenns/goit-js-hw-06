// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur), перевіряє його вміст щодо
// правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

const textInput = document.querySelector("#validation-input");
console.log(textInput)
textInput.addEventListener('blur', (event) => {
  if (Number(event.target.value.length) === 6) {
    textInput.classList.remove("invalid");
    textInput.classList.add("valid");    
  }
  else {
    textInput.classList.remove("valid");
    textInput.classList.add("invalid");
  }
  // console.log(Number(event.target.value.length))
});