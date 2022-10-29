const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', colorChange);

const colorReset = () => inputEl.classList.remove('valid', 'invalid');

function colorChange() {
    colorReset()
    if (inputEl.value.length === Number(inputEl.getAttribute('data-length'))) {
        return inputEl.classList.add('valid');
    } else if (!inputEl.value.length) {
        colorReset();
        return
    }
    inputEl.classList.add('invalid');
}
