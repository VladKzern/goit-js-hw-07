const categList = document.querySelector('#categories');
const categItemOfList = categList.querySelectorAll('.item');

console.log('Number of categories:', categItemOfList.length);

categItemOfList.forEach(item => {
  const categTitle = item.querySelector('h2').textContent;
  const listOfTitle = item.querySelectorAll('ul li');

  console.log('Category: ', categTitle);
  console.log('Elements: ', listOfTitle.length);
})