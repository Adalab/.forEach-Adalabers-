const formData = document.querySelector(".tunning__responsive");

function printLocalStorage (){
    let saveData = JSON.parse(localStorage.getItem("dataBack"));
    let nameData= dataBack.name;
    const inputName = document.querySelector("#name");
    inputName.value=nameData;
    console.log(nameData);
}

function saveDates (){
    localStorage.setItem("dataBack",JSON.stringify(dataBack));
    // saveData = JSON.parse(localStorage.getItem("dataBack"));
}

formData.addEventListener("change", saveDates);
window.addEventListener("load", printLocalStorage);