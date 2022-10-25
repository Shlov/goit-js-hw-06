function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bgEl = document.querySelector('body');
const btnEl = document.querySelector('.change-color');
const txtEl = document.querySelector('.color');

btnEl.addEventListener('click', changeBgColor);

function changeBgColor() {
  bgEl.style.backgroundColor = getRandomHexColor();
  txtEl.textContent = getRandomHexColor();
}
