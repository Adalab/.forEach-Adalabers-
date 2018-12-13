
function saveDates (){
    localStorage.setItem("dataBackLocal",JSON.stringify(dataBack));
}

function printLocalStorage(){
    const saveData = JSON.parse(localStorage.getItem("dataBackLocal"));

    let nameCard = document.querySelector(".userInfo__name");
    const inputName = document.querySelector("#name");
    let nameData= saveData.name;
    inputName.value=nameData;
    nameCard.innerHTML=nameData;
};


window.addEventListener("load", printLocalStorage);

