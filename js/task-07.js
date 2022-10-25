const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
// reset the initial position
inputEl.value = inputEl.getAttribute('min');

inputEl.addEventListener('input', fontSizeChange);

function fontSizeChange() {
    console.log(inputEl.value);
    textEl.style.fontSize = `${inputEl.value}px`;
}