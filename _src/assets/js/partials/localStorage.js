
function saveDates (){
    localStorage.setItem("dataBackLocal",JSON.stringify(dataBack));
}

function printLocalStorage(){
    const saveData = JSON.parse(localStorage.getItem("dataBackLocal"));

    let nameCard = document.querySelector(".userInfo__name"); //name
    const inputName = document.querySelector("#name");
    let nameData= saveData.name;
    inputName.value=nameData;
    nameCard.innerHTML=nameData;

    let jobCard = document.querySelector(".userInfo__job");
    const inputJob = document.querySelector("#job");
    let jobData = saveData.job;
    inputJob.value = jobData;
    jobCard.innerHTML = jobData;

    let emailCard = document.querySelector(".email");
    const inputEmail = document.querySelector("#email");
    let emailData = saveData.email;
    inputEmail.value = emailData;
    emailCard.href = `mailto:${emailData}`;

    let phoneCard = document.querySelector("#phone");
    const inputPhone = document.querySelector(".mobile");
    let phoneData = saveData.phone;
    inputPhone.value = phoneData;
    phoneCard.href = phoneData;
};


window.addEventListener("load", printLocalStorage);

