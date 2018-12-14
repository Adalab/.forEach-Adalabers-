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
