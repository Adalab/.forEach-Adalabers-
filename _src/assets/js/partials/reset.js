const btnReset = document.querySelector(".button__reset");

function handlerReset() {

  let saveData = JSON.parse(localStorage.getItem("dataBackLocal")); //saveData es mi cadena ahora objeto

  let nameCard = document.querySelector(".userInfo__name"); //name
  const inputName = document.querySelector("#name");
  inputName.value = "";
  nameCard.innerHTML = "Nombre Apellido";
  dataBack.name = "";
  saveDates();

  let jobCard = document.querySelector(".userInfo__job"); //job
  const inputJob = document.querySelector("#job");
  inputJob.value = "";
  jobCard.innerHTML = "Front-end developer";
  dataBack.job = "";
  saveDates();

  const profileImgLs = document.querySelector('.image-preview__file'); //image
  const profileImgSmallLs = document.querySelector('.image-preview-small');
  profileImgLs.style.backgroundImage = `url(assets/images/silueta.jpg)`;
  profileImgSmallLs.style.backgroundImage = `url(assets/images/silueta.jpg)`;
  dataBack.photo = `url(assets/images/silueta.jpg)`;
  saveDates();

  let emailCard = document.querySelector(".email"); //mail
  const inputEmail = document.querySelector("#email");
  inputEmail.value = "";
  emailCard.href = ``;
  dataBack.email = "";
  saveDates();

  let phoneCard = document.querySelector(".mobile"); //phone
  const inputPhone = document.querySelector("#phone");
  inputPhone.value = "";
  phoneCard.href = "";
  dataBack.phone = "";
  saveDates();

  let linkedinCard = document.querySelector(".linkedin"); //linkedin
  const inputLinkedin = document.querySelector("#linkedin");
  inputLinkedin.value = "";
  linkedinCard.href = ``;
  saveData.linkedin = "";

  let githubCard = document.querySelector(".github"); //github
  const inputGithub = document.querySelector("#github");
  inputGithub.value = "";
  githubCard.href = ``;
  dataBack.github = "";
  saveDates();

  const boxCard = document.querySelector("#box"); //palettes
  const palettesValue = [
    "box__card",
    "box__card--red",
    "box__card--grey",
    "box__card--purple",
    "box__card--orange",
  ];

  function removeClassPal() {
    for (let i = 0; i < palettesValue.length; i++) {
      boxCard.classList.remove(palettesValue[i]);
    }
  }
  removeClassPal();
  boxCard.classList.add("box__card");
  dataBack.palette = 1;
  saveDates();

  const boxFont = document.querySelector("#userInfo"); //typography
  const typographiesValue = [
    "userInfo--ubuntu",
    "userInfo--quaternary",
    "userInfo--mont",
    "userInfo--hand",
    "userInfo--libre"
  ];


  function removeClassTyp() {
    for (let i = 0; i < typographiesValue.length; i++) {
      boxFont.classList.remove(typographiesValue[i]);
    }
  };
  removeClassTyp();
  boxFont.classList.add("userInfo");
  dataBack.typography = 1;
  saveDates();

  const allSkillsInputs = document.querySelectorAll(".checkbox-input"); //Skills
  for (let i = 0; i < allSkillsInputs.length; i++) { // iteration for each Skill
    if (allSkillsInputs[i].checked = true) {
      allSkillsInputs[i].checked = false;
    }
    dataBack.skills = [];
    saveDates();
  }

  cardListSkills.innerHTML = ``;
}



btnReset.addEventListener("click", handlerReset);
