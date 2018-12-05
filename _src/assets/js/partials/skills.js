'use strict';

const checkboxElements = document.querySelectorAll('.checkbox-input');
const skillsElement = document.querySelector('.list__skills');

function handlerPrintSkills(event){
    const clickedInput = event.currentTarget;
    console.log(clickedInput);
    console.dir(clickedInput);
    reviewList();
}

for (let i=0; i< checkboxElements.length; i++){
   
   checkboxElements[i].addEventListener('click', handlerPrintSkills);
   console.log(checkboxElements[i]);
  
}

function reviewList (){
    let list="";
    let acc = 0;
    for (let i=0; i< checkboxElements.length; i++){
       
        if(checkboxElements[i].checked === true){
        
            list += `<li class="list__item-skills">${checkboxElements[i].value}</li>`;
            acc +=1;
            console.log('contador', acc);
        }else{
            let noChecked = checkboxElements[i];
            if (acc === 3){
                noChecked.disabled = true;
            }
        }
 
    }
    skillsElement.innerHTML = list;
    
}

