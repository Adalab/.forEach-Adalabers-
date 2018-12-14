let saveData = JSON.parse(localStorage.getItem("dataBackLocal")); //saveData es mi cadena ahora objeto

function printLocalStorage() {

  if (saveData) {
    dataBack = saveData
  };

  let nameCard = document.querySelector(".userInfo__name"); //name
  const inputName = document.querySelector("#name");
  let nameData = saveData.name;
  inputName.value = nameData;
  nameCard.innerHTML = nameData;

  let jobCard = document.querySelector(".userInfo__job"); //job
  const inputJob = document.querySelector("#job");
  let jobData = saveData.job;
  inputJob.value = jobData;
  jobCard.innerHTML = jobData;

  const profileImgLs = document.querySelector('.image-preview__file'); //image
  const profileImgSmallLs = document.querySelector('.image-preview-small');
  let imageData = saveData.photo;
  profileImgLs.style.backgroundImage = `url(${imageData})`;
  profileImgSmallLs.style.backgroundImage = `url(${imageData})`;

  let emailCard = document.querySelector(".email"); //mail
  const inputEmail = document.querySelector("#email");
  let emailData = saveData.email;
  inputEmail.value = emailData;
  emailCard.href = `mailto:${emailData}`;

  let phoneCard = document.querySelector(".mobile"); //phone
  const inputPhone = document.querySelector("#phone");
  let phoneData = saveData.phone;
  inputPhone.value = phoneData;
  phoneCard.href = phoneData;

  let linkedinCard = document.querySelector(".linkedin"); //linkedin
  const inputLinkedin = document.querySelector("#linkedin");
  let linkedinData = saveData.linkedin;
  inputLinkedin.value = linkedinData;
  linkedinCard.href = `https://linkedin.com/in/${linkedinData}`;

  let githubCard = document.querySelector(".github"); //github
  const inputGithub = document.querySelector("#github");
  let githubData = saveData.github;
  inputGithub.value = githubData;
  githubCard.href = `https://github.com/${githubData}`;

  const boxCard = document.querySelector("#box"); //palettes
  const palettesValue = [
    "box__card",
    "box__card--red",
    "box__card--grey",
    "box__card--purple",
    "box__card--orange",
  ];

  let valuePal = saveData.palette - 1;
  let classPal = palettesValue[valuePal];

  function removeClassPal() {
    for (let i = 0; i < palettesValue.length; i++) {
      boxCard.classList.remove(palettesValue[i]);
    }
  }
  removeClassPal();
  boxCard.classList.add("box__card");
  boxCard.classList.add(classPal);

  const boxFont = document.querySelector("#userInfo"); //typography
  const typographiesValue = [
    "userInfo--ubuntu",
    "userInfo--quaternary",
    "userInfo--mont",
    "userInfo--hand",
    "userInfo--libre"
  ];
  
  let valueTyp = saveData.typography - 1;
  let classTyp = typographiesValue[valueTyp];
  console.log('classTyp', classTyp);
  console.log ('valueTyp', valueTyp);

  function removeClassTyp(){
    for (let i=0; i<typographiesValue.length; i++){
        boxFont.classList.remove(typographiesValue[i]);
    }
}

removeClassTyp();

boxFont.classList.add("userInfo");
    boxFont.classList.add(classTyp);
};


window.addEventListener("load", printLocalStorage);
