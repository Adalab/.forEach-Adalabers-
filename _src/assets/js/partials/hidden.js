const designElement = document.querySelector('.design-card__options');
const buttonDesignElement = document.querySelector('.title-dropdown');
const fillElement = document.querySelector('.form');
const buttonFillElement = document.querySelector('.title-dropdown-fill');
const shareElement = document.querySelector('.container-share');
const buttonShareElement = document.querySelector('.container-title');
const arrowDesignElement = document.querySelector('.arrowD');
const arrowFillElement = document.querySelector('.arrowF');
const arrowShareElement = document.querySelector('.arrowSa');

/* le paso a la función información del evento (event) y lo guardo en una constante currentClicked*/
function handlerHidden(event) {
  const currentClicked = event.currentTarget; 
  /* cualquier boton que pulse se guarda en currenClicked*/ 
  /* ¿como se en que boton he clickado? tengo que hacer este condicional */

  if (currentClicked === buttonDesignElement){   
/* si el boton que pulsé es el de diseña, le decimos que se oculte el bloque de paleta y letra*/
    designElement.classList.toggle('hidden');
    arrowDesignElement.classList.toggle('fa-chevron-up');

  }else if (currentClicked === buttonFillElement){
/*Sino si el boton que pulsé es el de fill, le decimos que se oculte ese bloque*/
    fillElement.classList.toggle('hidden');
    arrowFillElement.classList.toggle('fa-chevron-up');

  } else {
  /*Sino , le decimos que se oculte el bloque que queda, 
  como ya no tenemos mas botones no hace falta por la condicion*/
    shareElement.classList.toggle('hidden');
    arrowShareElement.classList.toggle('fa-chevron-up');
  }
}

buttonDesignElement.addEventListener('click', handlerHidden);

buttonFillElement.addEventListener('click', handlerHidden);

buttonShareElement.addEventListener('click', handlerHidden);


/*FORMA DE HACER SIN USAR CURRENT-TARGET*/
/*function handlerHiddenDesign() {
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
buttonShareElement.addEventListener('click', handlerHiddenShare);*/