'use strict';


// JS for hidden (I think this page would be better in partial hidden but I do not know how to import it )
const inputName = document.querySelector("#name");
const nameCard = document.querySelector(".userInfo__name"); 

function handlerInput (){
    let dataInput = inputName.value;
    nameCard.innerHTML = dataInput;
};

inputName.addEventListener("keypress",handlerInput); //when you write your name the Card Change
inputName.addEventListener("blur",handlerInput);// when you change the focus your name change (applicable after cutting and pasting)

