const designElement = document.querySelector('.design-card__options');
const buttonDesignElement = document.querySelector('.title-dropdown');
const fillElement = document.querySelector('.form');
const buttonFillElement = document.querySelector('.title-dropdown-fill');
const shareElement = document.querySelector('.container-share');
const buttonShareElement = document.querySelector('.container-title');
const arrowDesignElement = document.querySelector('.arrowD');
const arrowFillElement = document.querySelector('.arrowF');
const arrowShareElement = document.querySelector('.arrowSa');

function handlerHidden(event) {
  const currentClicked = event.currentTarget; 
  if (currentClicked === buttonDesignElement){   

    designElement.classList.toggle('hidden');
    
    if(arrowDesignElement.classList.contains('fa-chevron-up')){
      arrowDesignElement.classList.remove('fa-chevron-up');
      arrowDesignElement.classList.add('fa-chevron-down');
    }else{
      arrowDesignElement.classList.remove('fa-chevron-down');
      arrowDesignElement.classList.add('fa-chevron-up');
    }
    fillElement.classList.add('hidden');
    shareElement.classList.add('hidden');

  }else if (currentClicked === buttonFillElement){
    hiddenBlockElement (fillElement, shareElement, designElement, arrowFillElement);
    // fillElement.classList.toggle('hidden');
    // arrowFillElement.classList.toggle('fa-chevron-up');
    // shareElement.classList.add('hidden');
    // designElement.classList.add('hidden');

  } else {
    hiddenBlockElement (shareElement, designElement,fillElement, arrowShareElement);
    // shareElement.classList.toggle('hidden');
    // arrowShareElement.classList.toggle('fa-chevron-up');
    // designElement.classList.add('hidden');
    // fillElement.classList.add('hidden');
  }
}

function hiddenBlockElement (clickedBlock, firstHiddenBlock, secondHiddenBlock, arrow){
  clickedBlock.classList.toggle('hidden');
  firstHiddenBlock.classList.add('hidden');
  secondHiddenBlock.classList.add('hidden');
  arrow.classList.toggle('fa-chevron-up');
}

buttonDesignElement.addEventListener('click', handlerHidden);
buttonFillElement.addEventListener('click', handlerHidden);
buttonShareElement.addEventListener('click', handlerHidden);

