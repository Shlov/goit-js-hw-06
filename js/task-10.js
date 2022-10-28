function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const inputEl = document.querySelector('input');
const boxesEl = document.querySelector('#boxes');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);
let widthBox = 30;
let heightBox = 30;

function createBoxes() {
  const boxes = []
  for (let index = 0; index < Number(inputEl.value); index+=1) {
    const boxEl = document.createElement('div');
    boxEl.style.backgroundColor = getRandomHexColor();
    boxEl.style.width = `${widthBox}px`;
    boxEl.style.height = `${heightBox}px`;
    boxes.push(boxEl);
    widthBox += 10;
    heightBox += 10;
  }
  boxesEl.append(...boxes); 
}

// var 1
function destroyBoxes() {
  const quantity = boxesEl.children.length;
  for (let index = 1; index < quantity + 1; index += 1) {
    boxesEl.firstChild.remove();
    widthBox = 30;
    heightBox = 30;
    inputEl.value = '';
  }
}

// var 2
// function destroyBoxes() {
//   while (boxesEl.children.length) {
//     boxesEl.firstChild.remove();
//     widthBox = 30;
//     heightBox = 30;
//   }
// }

boxesEl.style.display = 'flex';
boxesEl.style.justifyContent = 'flex-start';
boxesEl.style.alignItems = 'center';
boxesEl.style.padding = '10px';
