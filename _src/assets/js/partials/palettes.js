const boxCard = document.querySelector("#box");

const palettesOption = document.querySelector(".design-card__colors__select-palette");

const palettes = {
    paletteRed: "box__card--red",
    paletteGrey: "box__card--grey",
    palettePurple: "box__card--purple",
    paletteOrange: "box__card--orange",
    paletteGreen: "box__card",
}

let AllPalettes = Object.values(palettes);

function removeClass () {
    for(let i=0;i<AllPalettes.length;i++){
        boxCard.classList.remove(AllPalettes[i]);
    }
}

function handlerPalette(e) {
    let inputClick = e.target.getAttribute("data-palette"); // clave objeto
    let valueClick = e.target.getAttribute("value"); //numero
    let paletteClick = palettes[inputClick]; // valor objeto --clave
    removeClass();
    boxCard.classList.add("box__card");
    boxCard.classList.add(paletteClick);
    boxCard.setAttribute("value", valueClick);
    dataBack.palette = parseInt(valueClick);
}

palettesOption.addEventListener("click", handlerPalette);
