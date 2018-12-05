'use strict';

const checkboxElements = document.querySelectorAll('.checkbox-input');
const skillsElement = document.querySelector('.list__skills');

function handlerPrintSkills(event){
    const clickedInput = event.currentTarget;
    reviewList();
}

for (const skill of checkboxElements){
   
   skill.addEventListener('click', handlerPrintSkills);  
}

 function reviewList (){
    let list="";
     let acc= 0;
    for (const skill of checkboxElements) { 
       
        if(skill.checked === true){
        
            list += `<li class="list__item-skills">${skill.value}</li>`;
             acc +=1;
           
         }else{
             let noChecked = skill;
             if (acc === 3){
                 noChecked.disabled = true;
             }
         }
 
     }
     skillsElement.innerHTML = list;
     console.log('contador', acc);
}

