const boxFont = document.querySelector("#userInfo");
const fontOption = document.querySelector(".design-Card__colors__select-font");

const fonts = {
    Ubuntu: "userInfo--ubuntu",
    ComicSans: "userInfo--quaternary",
    Montserrat: "userInfo--mont",
    Indie: "userInfo--hand",
    Baskerville: "userInfo--libre",
}

let allFontsClass = Object.values(fonts);

function removeClassFont(){
    for (let i=0; i<allFontsClass.length; i++){
        boxFont.classList.remove(allFontsClass[i]);
    }
}


function handlerFonts (e) {
    let inputClick = e.target.getAttribute("data-font");
    let fontClassClick = fonts[inputClick];
    let valueClick = e.target.getAttribute("value");
    removeClassFont();
    boxFont.classList.add("userInfo");
    boxFont.classList.add(fontClassClick);
    dataBack.typography = parseInt(valueClick);
    saveDates ();
}

fontOption.addEventListener("click", handlerFonts);