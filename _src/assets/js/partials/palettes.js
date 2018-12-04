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

function removeClass (array) {
    for(let i=0;i<array.length;i++){
        boxCard.classList.remove(array[i]);
    }
}

function handlerPalette (e) {
    let inputClick = e.target.value;
    let paletteClick = palettes[inputClick];
    removeClass(AllPalettes);
    boxCard.classList.add("box__card");
    boxCard.classList.add(paletteClick);
}


palettesOption.addEventListener("click", handlerPalette);