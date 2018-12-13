const formData = document.querySelector(".tunning__responsive");


function printLocalStorage (){
    const saveData = JSON.parse(localStorage.getItem("dataBackLocal"));
    console.log(saveData)
    const inputName = document.querySelector("#name");
    const inputJob = document.querySelector("#job");
    const inputEmail = document.querySelector("#email");


    let nameData= saveData.name;
    inputName.value=nameData;

    let jobData= saveData.job;
    inputJob.value=jobData;

    let emailData= saveData.email;
    inputEmail.value=emailData;

    let githubData= saveData.github;
    inputGithub.value=githubData;

    let linkedinData= saveData.linkedin;
    inputLinkedin.value=linkedinData;

    let phoneData= saveData.phone;
    inputPhone.value=phoneData;

    let paletteData= saveData.palette;
    let paletteClicked = document.querySelector(`.palette${paletteData}`);
    paletteClicked.setAttribute("checked",true); 
    let inputClick= paletteClicked.getAttribute("data-palette"); // Paleta clickeada 
    let classPaletteClick = palettes[inputClick]; // valor objeto --clase
    removeClass();
    boxCard.classList.add("box__card");
    boxCard.classList.add(classPaletteClick);
    

    
    
 
    let typographyData= saveData.typography; 
    let typographyCliked = document.querySelector(`.typography${typographyData}`);
    //typographyCliked.setAttribute("checked",true);  
    

}

function saveDates (){
    localStorage.setItem("dataBackLocal",JSON.stringify(dataBack));
}

formData.addEventListener("change", saveDates);
formData.addEventListener("click", saveDates);
formData.addEventListener("change", printLocalStorage);
window.addEventListener("load", printLocalStorage);