const designElement = document.querySelector('.design-card__options');
const buttonDesignElement = document.querySelector('.title-dropdown');
const fillElement = document.querySelector('.form');
const buttonFillElement = document.querySelector('.title-dropdown-fill');
const shareElement = document.querySelector('.container-share');
const buttonShareElement = document.querySelector('.container-title');
const arrowDesignElement = document.querySelector('.arrowD');
const arrowFillElement = document.querySelector('.arrowF');
const arrowShareElement = document.querySelector('.arrowSa');

const currentElementFunction = (currentElement, currentArrow) => {
  currentElement.classList.toggle('hidden');
  if (currentElement.classList.contains('hidden')) {
    currentArrow.classList.add('fa-chevron-down');
    currentArrow.classList.remove('fa-chevron-up');
  } else {
    currentArrow.classList.remove('fa-chevron-down');
    currentArrow.classList.add('fa-chevron-up');
  }
};

const firstHiddenElementFunction = (firstHiddenElement, firstArrowElement) => {
  firstHiddenElement.classList.add('hidden');
  if (firstArrowElement.classList.contains('.fa-chevron-up')) {
    firstArrowElement.classList.remove('fa-chevron-up');
    firstArrowElement.classList.add('fa-chevron-down');
  }
};

const secondHiddenElementFunction = (secondHiddenElement, secondArrowElement) => {
  secondHiddenElement.classList.add('hidden');
  if (secondArrowElement.classList.contains('.fa-chevron-up')) {
    secondArrowElement.classList.remove('fa-chevron-up');
    secondArrowElement.classList.add('fa-chevron-down');
  }
};

function handlerHidden(event) {
  const currentClicked = event.currentTarget;
  if (currentClicked === buttonDesignElement) {
    currentElementFunction(designElement, arrowDesignElement);
    firstHiddenElementFunction(fillElement, arrowFillElement);
    secondHiddenElementFunction(shareElement, arrowShareElement);
  }
  if (currentClicked === buttonFillElement) {
    currentElementFunction(fillElement, arrowFillElement);
    firstHiddenElementFunction(designElement, arrowDesignElement);
    secondHiddenElementFunction(shareElement, arrowShareElement);
  }
  if (currentClicked === buttonShareElement) {
    currentElementFunction(shareElement, arrowShareElement);
    firstHiddenElementFunction(designElement, arrowDesignElement);
    secondHiddenElementFunction(fillElement, arrowFillElement);
  }
}

buttonDesignElement.addEventListener('click', handlerHidden);
buttonFillElement.addEventListener('click', handlerHidden);
buttonShareElement.addEventListener('click', handlerHidden);