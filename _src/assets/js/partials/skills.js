'use strict';

const checkboxElements = document.querySelectorAll('.checkbox-input');
const skillsElement = document.querySelector('.list__skills');

function handlerPrintSkills(event){
    const clickedInput = event.currentTarget;
    console.log(clickedInput);
    console.dir(clickedInput);
    reviewList();
}

for (const skill of checkboxElements){
   
   skill.addEventListener('click', handlerPrintSkills);
   console.log(skill);
  
}

function reviewList (){
    let list="";
    for (const skill of checkboxElements) { 
       
        if(skill.checked === true){
        
            list += `<li class="list__item-skills"> ${skill.value}</li>`;

        }
    }
    skillsElement.innerHTML = list;
    
}



/* <li class="list__item-skills">Html</li>
                <li class="list__item-skills">css</li>
                <li class="list__item-skills">gulp</li>
                <li class="list__item-skills">git</li>
                <li class="list__item-skills">Sass</li>
                <li class="list__item-skills">JavaScript</li>
                <li class="list__item-skills">AJAX</li>
                <li class="list__item-skills">React</li>  */