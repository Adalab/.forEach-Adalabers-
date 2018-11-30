'use strict';

// JS for hidden (I think this page would be better in partial hidden but I do not know how to import it )

//NAME
const inputName = document.querySelector("#name");
const nameCard = document.querySelector(".userInfo__name"); 

function handlerInputName (){
   
    let dataInput = inputName.value;
    if(inputName.value===""){
        nameCard.innerHTML="Nombre Apellido";
    }
    else{
        nameCard.innerHTML = dataInput;
    };
};

inputName.addEventListener("keyup",handlerInputName); //when you write your name the Card Change
inputName.addEventListener("blur",handlerInputName);// when you change the focus your name change (applicable after cutting and pasting)
inputName.addEventListener("change",handlerInputName);
inputName.addEventListener("keydown",handlerInputName);

//JOB
const inputJob = document.querySelector("#job");
const jobCard = document.querySelector(".userInfo__job"); 

function handlerInputJob (){
   
    let dataInput = inputJob.value;
    if(inputJob.value===""){
        jobCard.innerHTML="Front-end developer";
    } else{
        jobCard.innerHTML = dataInput;
    };
};

inputJob.addEventListener("keyup",handlerInputJob); //when you write your job the Card Change
inputJob.addEventListener("blur",handlerInputJob);// when you change the focus your job change (applicable after cutting and pasting)
inputJob.addEventListener("change",handlerInputJob);
inputJob.addEventListener("keydown",handlerInputJob);
