const designElement = document.querySelector('.design-card__options');
const buttonDesignElement = document.querySelector('.title-dropdown');
const fillElement = document.querySelector('.form');
const buttonFillElement = document.querySelector('.title-dropdown-fill');
const shareElement = document.querySelector('.container-share');
const buttonShareElement = document.querySelector('.container-title');

function handlerHiddenDesign() {
  designElement.classList.toggle('hidden');

}
buttonDesignElement.addEventListener('click', handlerHiddenDesign);

function handlerHiddenFill() {
  fillElement.classList.toggle('hidden');
  console.log(fillElement);

}
buttonFillElement.addEventListener('click', handlerHiddenFill);
console.log(buttonFillElement);


function handlerHiddenShare() {
  shareElement.classList.toggle('hidden');

}
buttonShareElement.addEventListener('click', handlerHiddenShare);
