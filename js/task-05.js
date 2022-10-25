const nptNameEl = document.querySelector('#name-input');
const btnNameEl = document.querySelector('#name-output');

nptNameEl.addEventListener('input', updatesBtn);

function updatesBtn() {
    if (nptNameEl.value.length) {
        return btnNameEl.textContent = nptNameEl.value;
    }
    btnNameEl.textContent = 'Anonymous'
}
