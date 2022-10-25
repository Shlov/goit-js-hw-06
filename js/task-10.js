function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const inputEl = document.querySelector('input');
const boxesEl = document.querySelector('#boxes');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes() {
  const boxes = []
  for (let index = 0; index < Number(inputEl.value); index+=1) {
    const widthBox = 30;
    const heightBox = 30;
    const boxEl = document.createElement('div');
    boxEl.style.backgroundColor = getRandomHexColor();
    boxEl.style.width = `${widthBox + 10 * index}px`;
    boxEl.style.height = `${heightBox + 10 * index}px`;
    boxes.push(boxEl)
  }
  boxesEl.append(...boxes); 
}

function destroyBoxes() {
  const quantity = boxesEl.children.length
  for (let index = 1; index < quantity + 1; index += 1) {
    boxesEl.firstChild.remove();
  }
}

boxesEl.style.display = 'flex';
boxesEl.style.justifyContent = 'flex-start';
boxesEl.style.alignItems = 'center';
boxesEl.style.padding = '10px';
