const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const lisEl = ingredients.reduce((acc, el) => {
  const headingEl = document.createElement('li');
  headingEl.textContent = `${el}`;
  headingEl.classList.add('item');
  acc.push(headingEl);
  return acc;
},[]);

document.querySelector('#ingredients').append(...lisEl);

// const addLi = () => {
//   const lisEl = ingredients.reduce((acc, el) => {
//     const headingEl = document.createElement('li');
//     headingEl.classList.add('item');
//     headingEl.textContent = `${el}`;
//     acc.push(headingEl);
//     return acc;
//   },[])
// document.querySelector('#ingredients').append(...lisEl);
// }
// addLi()


