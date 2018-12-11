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

function handlerPalette (e) {
    let inputClick = e.target.getAttribute("data-palette");
    let valueClick = e.target.getAttribute("value");
    let paletteClick = palettes[inputClick];
    removeClass();
    boxCard.classList.add("box__card");
    boxCard.classList.add(paletteClick);
    boxCard.setAttribute("value", valueClick);

}


palettesOption.addEventListener("click", handlerPalette);