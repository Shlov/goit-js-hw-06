let counterValue = 0;

const value = document.querySelector('#value');
const decreaseValue = document.querySelector('[data-action="decrement"]');
const increaseValue = document.querySelector('[data-action="increment"]');

const decrease = () => {value.textContent = counterValue -= 1};
const increase = () => {value.textContent = counterValue += 1};

decreaseValue.addEventListener('click', decrease);
increaseValue.addEventListener('click', increase);