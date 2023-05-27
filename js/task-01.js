
const categoriesList = document.querySelector('#categories');


const categoryCount = categoriesList.querySelectorAll('.item').length;
console.log(`Number of categories: ${categoryCount}`);


categoriesList.querySelectorAll('.item').forEach((categoryItem) => {

  const categoryHeading = categoryItem.querySelector('h2').textContent;

  
  const categoryElementCount = categoryItem.querySelectorAll('li').length;

  
  console.log(`${categoryHeading} (${categoryElementCount} elements)`);
});
