'use strict';


const inputName = document.querySelector("#name");
const nameCard = document.querySelector(".userInfo__name"); 
const inputJob = document.querySelector("#job");
const jobCard = document.querySelector(".userInfo__job");
const inputEmail = document.querySelector("#email");
const emailCard = document.querySelector(".email"); 
const inputGithub = document.querySelector("#github");
const GithubCard = document.querySelector(".github"); 
const inputLinkedin = document.querySelector("#linkedin");
const LinkedinCard = document.querySelector(".linkedin");
const inputPhone = document.querySelector("#phone");
const phoneCard = document.querySelector(".mobile"); 

function handlerInputName (){
   
    let dataInput = inputName.value;

    if(inputName.value===""){
        nameCard.innerHTML="Nombre Apellido";
    } else{
        nameCard.innerHTML = dataInput;
        dataBack.name = dataInput;
        saveDates ();
    };
};

inputName.addEventListener("keyup",handlerInputName); 

function handlerInputJob (){
   
    let dataInput = inputJob.value;
    if(inputJob.value===""){
        jobCard.innerHTML="Front-end developer";
    } else{
        jobCard.innerHTML = dataInput;
        dataBack.job = dataInput;
        saveDates ();
    };
};

inputJob.addEventListener("keyup",handlerInputJob); 

function handlerInputEmail (){
    let dataInput = inputEmail.value;
    emailCard.href=`mailto:${dataInput}`;
    dataBack.email= dataInput;
    saveDates ();
};

inputEmail.addEventListener("keyup",handlerInputEmail); 

function handlerInputGithub (){
    let dataInput = inputGithub.value;
    GithubCard.href=`https://github.com/${dataInput}`;
    dataBack.github= dataInput;
    saveDates ();
    
};

inputGithub.addEventListener("keyup",handlerInputGithub);  

function handlerInputLinkedin(){
    let dataInput = inputLinkedin.value;
    LinkedinCard.href=`https://linkedin.com/in/${dataInput}`;
    dataBack.linkedin= dataInput;
    saveDates ();

};

inputLinkedin.addEventListener("keyup",handlerInputLinkedin); 

function handlerInputMobile (){
   
    let dataInput = inputPhone.value;
    phoneCard.href = `tel: +34 ${dataInput}`;
    dataBack.phone= dataInput;
    saveDates ();

};

// function pickupElement (inputElement, elementLS, elementHtml){
//     let dataInput = inputElement.value;

//     dataBack.elementLS= dataInput;
//     saveDates();
// }

inputPhone.addEventListener("keyup",handlerInputMobile);

