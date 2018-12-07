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

//RESET FORM

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

//RESET CARD PREVIEW

function resetElementsCard (){
    const empty = "";
    let cardReset =[
    nameCardReset,
    jobCardReset, 
    emailCardReset, 
    GithubCardReset, 
    LinkedinCardReset,
    phoneCardReset,
    ];
    for (let i=0; i<cardReset.length; i++){
        cardReset[0].innerHTML="Nombre Apellido";
        cardReset[1].innerHTML="Front-end developer";
        cardReset[2].href= `mailto:${empty}`;
        cardReset[3].href=`https://${empty}`;
        cardReset[4].href=`https://${empty}`;
        cardReset[5].href=`tel: +34 ${empty}`;
    };
};
resetFormC.addEventListener("click",resetElementsCard);

//RESET IMAGE CARD PREVIEW

const uploadBtnR = document.querySelector('.image-link');
const fileFieldR = document.querySelector('#img-selector');
const profileImageR = document.querySelector('.image-preview__file');
const profileImageSmallR = document.querySelector('.image-preview-small');

function deleteImageR() {
    profileImageR.style.backgroundImage = `url(assets/images/silueta.jpg)`;
    profileImageSmallR.style.backgroundImage = "";
}

resetFormC.addEventListener("click", deleteImageR);

