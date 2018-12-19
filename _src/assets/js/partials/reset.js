const resetFormC = document.querySelector(".button__reset");

function printFormCardReset(){
    let nameCard = document.querySelector(".userInfo__name"); //name
    const inputName = document.querySelector("#name");
    let nameData = dataBack.name;//saveData debe ser dataBack
    inputName.value = nameData;
    nameCard.innerHTML= nameData;

    let jobCard = document.querySelector(".userInfo__job"); //job
    const inputJob = document.querySelector("#job");
    let jobData = dataBack.job;
    inputJob.value = jobData;
    jobCard.innerHTML = jobData;

    let emailCard = document.querySelector(".email"); //mail
    const inputEmail = document.querySelector("#email");
    let emailData = dataBack.email;
    inputEmail.value = emailData;
    emailCard.href = `mailto:${emailData}`;

    let phoneCard = document.querySelector(".mobile"); //phone
    const inputPhone = document.querySelector("#phone");
    let phoneData = dataBack.phone;
    inputPhone.value = phoneData;
    phoneCard.href = phoneData;

    let linkedinCard = document.querySelector(".linkedin"); //linkedin
    const inputLinkedin = document.querySelector("#linkedin");
    let linkedinData = dataBack.linkedin;
    inputLinkedin.value = linkedinData;
    linkedinCard.href = `https://linkedin.com/in/${linkedinData}`;

    let githubCard = document.querySelector(".github"); //github
    const inputGithub = document.querySelector("#github");
    let githubData = dataBack.github;
    inputGithub.value = githubData;
    githubCard.href = `https://github.com/${githubData}`;
    console.log(githubData);
}

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
    printFormCardReset();

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


