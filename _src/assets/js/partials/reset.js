const resetFormC = document.querySelector(".button__reset");



function resetDataBack(){
    dataBack.palette = "";
    dataBack.typography ="";
    dataBack.name = "";
    dataBack.job ="";
    dataBack.phone ="";
    dataBack.email ="";
    dataBack.linkedin ="";
    dataBack.github ="";
    dataBack.photo ="";
    dataBack.skills = [];

    saveDates();
    printFormCard();

}

resetFormC.addEventListener("click", resetDataBack);

// //RESET FORM CARD PREVIEW

// function resetElementsCard (){
//     const empty = "";
//     let cardReset =[
//     nameCardReset,
//     jobCardReset, 
//     emailCardReset, 
//     GithubCardReset, 
//     LinkedinCardReset,
//     phoneCardReset,
//     ];
//     for (let i=0; i<cardReset.length; i++){
//         cardReset[0].innerHTML="Nombre Apellido";
//         cardReset[1].innerHTML="Front-end developer";
//         cardReset[2].href= `mailto:${empty}`;
//         cardReset[3].href=`https://${empty}`;
//         cardReset[4].href=`https://${empty}`;
//         cardReset[5].href=`tel: +34 ${empty}`;
//     };
// };
// resetFormC.addEventListener("click",resetElementsCard);


