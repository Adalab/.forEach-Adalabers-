const resetFormC = document.querySelector("#button__reset");

function resetElementsForm (){
    let elementsReset =[
        'inputName',
        'inputJob',
        'inputEmail',
        'inputGithub',
        'inputLinkedin',
        'inputPhone',
    ];
    for (let i=0; i<elementsReset.length; i++){
        elementsReset[i]="";
    };
}
resetFormC.addEventListener("click",resetElementsForm);
