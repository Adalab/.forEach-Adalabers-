const boxFont = document.querySelector("#userInfo");
const fontOption = document.querySelector(".design-Card__colors__select-font");

const fonts = {
    Ubuntu: "userinfo--ubuntu",
    ComicSans: "userinfo--quaternary",
    Montserrat: "userinfo--mont",
    Indie: "userinfo--hand",
    Baskerville: "userinfo--libre",
}

let allFontsClass = Object.values(fonts);

function removeClassFont(){
    for (let i=0; i<allFontsClass; i++){
        boxFont.classList.remove(allFontsClass[i]);
    }
}

function handlerFonts (e) {
    let inputClick = e.target.value;
    let fontClassClick = fonts[inputClick];
    removeClassFont();
    boxFont.classList.add("userInfo");
    boxFont.classList.add(fontClassClick);
}

fontOption.addEventListener("click", handlerFonts);