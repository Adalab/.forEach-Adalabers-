const formData = document.querySelector(".tunning__responsive");


function printLocalStorage (){
    const saveData = JSON.parse(localStorage.getItem("dataBackLocal"));
    console.log(saveData)
    const inputName = document.querySelector("#name");
    const inputJob = document.querySelector("#job");
    const inputEmail = document.querySelector("#email");


    let nameData= saveData.name; //name
    inputName.value=nameData;

    let jobData= saveData.job; //job
    inputJob.value=jobData;

    let emailData= saveData.email;//email
    inputEmail.value=emailData;

    let githubData= saveData.github; //github
    inputGithub.value=githubData;

    let linkedinData= saveData.linkedin; //linkedin
    inputLinkedin.value=linkedinData;

    let phoneData= saveData.phone;//phone
    inputPhone.value=phoneData;

    let paletteData= saveData.palette; //palette
    let paletteClicked = document.querySelector(`.palette${paletteData}`);
    paletteClicked.setAttribute("checked",true); 
    let inputClick= paletteClicked.getAttribute("data-palette"); // Paleta clickeada 
    let classPaletteClick = palettes[inputClick]; // valor objeto --clase
    removeClass();
    boxCard.classList.add("box__card");
    boxCard.classList.add(classPaletteClick);

    let typoData= saveData.typography; //typography
    let typoClicked = document.querySelector(`.typography${typoData}`);
    typoClicked.setAttribute("checked",true); 
    let inputClickTypo= typoClicked.getAttribute("data-font"); // Paleta clickeada 
    let classTypoClick = fonts[inputClickTypo]; // valor objeto --clase
    boxFont.classList.add("userInfo");
    boxFont.classList.add(classTypoClick);
    

    

}

function saveDates (){
    localStorage.setItem("dataBackLocal",JSON.stringify(dataBack));
}

formData.addEventListener("change", saveDates);
formData.addEventListener("click", saveDates);
formData.addEventListener("change", printLocalStorage);
window.addEventListener("load", printLocalStorage);