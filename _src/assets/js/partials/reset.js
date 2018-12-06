const resetFormC = document.querySelector("#button__reset");
const inputPhoneReset = document.querySelector("#phone");
const inputLinkedinReset = document.querySelector("#linkedin");
const inputGithubReset = document.querySelector("#github");
const inputEmailReset = document.querySelector("#email");
const inputJobReset = document.querySelector("#job");
const inputNameReset = document.querySelector("#name");
const nameCardReset = document.querySelector("#userInfo__name"); 
const jobCardReset = document.querySelector("#userInfo__job"); 
const emailCardReset = document.querySelector("#email"); 
const GithubCardReset = document.querySelector("#github"); 
const LinkedinCardReset = document.querySelector("#linkedin");
const phoneCardReset = document.querySelector("#mobile"); 

function resetElementsForm (){
    let elementsReset =[
        inputNameReset,
        inputJobReset,
        inputEmailReset,
        inputGithubReset,
        inputLinkedinReset,
        inputPhoneReset,
    ];
    for (let i=0; i<elementsReset.length; i++){
        elementsReset[i].value="";
    };
};
resetFormC.addEventListener("click",resetElementsForm);

function resetElementsCard (){
    let cardReset =[
    jobCardReset, 
    emailCardReset, 
    GithubCardReset, 
    LinkedinCardReset,
    phoneCardReset,
    ];
    for (let i=0; i<cardReset.length; i++){
        cardReset[i].innerHTML="";
    };
};
resetFormC.addEventListener("click",resetElementsCard);