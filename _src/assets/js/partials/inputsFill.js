'use strict';

// JS for hidden (I think this page would be better in partial hidden but I do not know how to import it )

//NAME
const inputName = document.querySelector("#name");
const nameCard = document.querySelector(".userInfo__name"); 

function handlerInputName (){
   
    let dataInput = inputName.value;

    if(inputName.value===""){
        nameCard.innerHTML="Nombre Apellido";
    } else{
        nameCard.innerHTML = dataInput;
        dataBack.name = dataInput;
    };
};

inputName.addEventListener("keyup",handlerInputName); //when you write your name the Card Change
inputName.addEventListener("blur",handlerInputName);// when you change the focus your name change (applicable after cutting and pasting)
inputName.addEventListener("change",handlerInputName);
inputName.addEventListener("keydown",handlerInputName);
window.addEventListener("load",handlerInputName);


//JOB
const inputJob = document.querySelector("#job");
const jobCard = document.querySelector(".userInfo__job"); 

function handlerInputJob (){
   
    let dataInput = inputJob.value;
    if(inputJob.value===""){
        jobCard.innerHTML="Front-end developer";
    } else{
        jobCard.innerHTML = dataInput;
        dataBack.job = dataInput;
    };
};

inputJob.addEventListener("keyup",handlerInputJob); //when you write your job the Card Change
inputJob.addEventListener("blur",handlerInputJob);// when you change the focus your job change (applicable after cutting and pasting)
inputJob.addEventListener("change",handlerInputJob);
inputJob.addEventListener("keydown",handlerInputJob);
window.addEventListener("load",handlerInputJob);


//EMAIL

const inputEmail = document.querySelector("#email");
const emailCard = document.querySelector(".email"); 

function handlerInputEmail (){
    let dataInput = inputEmail.value;
    emailCard.href=`mailto:${dataInput}`;
    dataBack.email= dataInput;
};

inputEmail.addEventListener("keyup",handlerInputEmail); //when you write your job the Card Change
inputEmail.addEventListener("blur",handlerInputEmail);// when you change the focus your job change (applicable after cutting and pasting)
inputEmail.addEventListener("change",handlerInputEmail);
inputEmail.addEventListener("keydown",handlerInputEmail);
window.addEventListener("load",handlerInputEmail);


//GITHUB

const inputGithub = document.querySelector("#github");
const GithubCard = document.querySelector(".github"); 

function handlerInputGithub (){
    let dataInput = inputGithub.value;
    GithubCard.href=`https://github.com/${dataInput}`;
    dataBack.github= dataInput;
};

inputGithub.addEventListener("keyup",handlerInputGithub); //when you write your job the Card Change
inputGithub.addEventListener("blur",handlerInputGithub);// when you change the focus your job change (applicable after cutting and pasting)
inputGithub.addEventListener("change",handlerInputGithub);
inputGithub.addEventListener("keydown",handlerInputGithub);
window.addEventListener("load",handlerInputGithub);


//LINKEDIN

const inputLinkedin = document.querySelector("#linkedin");
const LinkedinCard = document.querySelector(".linkedin"); 

function handlerInputLinkedin(){
    let dataInput = inputLinkedin.value;
    LinkedinCard.href=`https://linkedin.com/in/${dataInput}`;
    dataBack.linkedin= dataInput;
};

inputLinkedin.addEventListener("keyup",handlerInputLinkedin); //when you write your job the Card Change
inputLinkedin.addEventListener("blur",handlerInputLinkedin);// when you change the focus your job change (applicable after cutting and pasting)
inputLinkedin.addEventListener("change",handlerInputLinkedin);
inputLinkedin.addEventListener("keydown",handlerInputLinkedin);
window.addEventListener("load",handlerInputLinkedin);

//TELEPHONE
const inputPhone = document.querySelector("#phone");
const phoneCard = document.querySelector(".mobile"); 

function handlerInputMobile (){
   
    let dataInput = inputPhone.value;
    phoneCard.href = `tel: +34 ${dataInput}`;
    dataBack.phone= dataInput;
};

inputPhone.addEventListener("keyup",handlerInputMobile);
window.addEventListener("load",handlerInputMobile);
