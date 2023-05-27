const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatoes",
  "Herbs",
  "Condiments"
];

const ul = document.querySelector('#ingredients');
console.log(`${ul}`);
ingredients.forEach(ingredient => {
  const li = document.createElement('li');
  li.textContent = ingredient;
  li.classList.add('item');
  ul.appendChild(li);
});

