let saveData = JSON.parse(localStorage.getItem("dataBackLocal")); //saveData es mi cadena ahora objeto

function saveDates() {
  localStorage.setItem("dataBackLocal", JSON.stringify(dataBack));
}

function printLocalStorage() {

  if (saveData) {
    dataBack = saveData;
  }

  const allValuesDataBack = Object.values(dataBack);

  let dataBackReset = [1, 1, "", "", "", "", "", "", "url(assets/images/silueta.jpg)", []];

  const result = dataBackReset.reduce(
    (acc) => acc + 1
  );

  function fillCardName() {
    let nameCard = document.querySelector(".userInfo__name"); //name
    const inputName = document.querySelector("#name");
    let nameData = saveData.name;
    inputName.value = nameData;
    if (nameData === "") {
      nameCard.innerHTML = "Nombre Apellido";
    } else {
      nameCard.innerHTML = nameData;
    }
  }

  function fillCardJob() {
    let jobCard = document.querySelector(".userInfo__job"); //job
    const inputJob = document.querySelector("#job");
    let jobData = saveData.job;
    inputJob.value = jobData;
    if (jobData === "") {
      jobCard.innerHTML = "Front-end developer";
    } else {
      jobCard.innerHTML = jobData;
    }
  }

  function fillCardImage() {
    const profileImgLs = document.querySelector('.image-preview__file'); //image
    const profileImgSmallLs = document.querySelector('.image-preview-small');
    let imageData = saveData.photo;
    profileImgLs.style.backgroundImage = `url(${imageData})`;
    profileImgSmallLs.style.backgroundImage = `url(${imageData})`;
  }

  function fillCardEmail() {
    let emailCard = document.querySelector(".email"); //mail
    const inputEmail = document.querySelector("#email");
    let emailData = saveData.email;
    inputEmail.value = emailData;
    emailCard.href = `mailto:${emailData}`;
  }

  function fillCardPhone() {
    let phoneCard = document.querySelector(".mobile"); //phone
    const inputPhone = document.querySelector("#phone");
    let phoneData = saveData.phone;
    inputPhone.value = phoneData;
    phoneCard.href = phoneData;
  }

  function fillCardLinkedin() {
    let linkedinCard = document.querySelector(".linkedin"); //linkedin
    const inputLinkedin = document.querySelector("#linkedin");
    let linkedinData = saveData.linkedin;
    inputLinkedin.value = linkedinData;
    linkedinCard.href = `https://linkedin.com/in/${linkedinData}`;
  }

  function fillCardGithub() {
    let githubCard = document.querySelector(".github"); //github
    const inputGithub = document.querySelector("#github");
    let githubData = saveData.github;
    inputGithub.value = githubData;
    githubCard.href = `https://github.com/${githubData}`;
  }

  function manageCardPalette() {

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


    for (const value of palettesValue) {
      boxCard.classList.remove(value);
    }

    boxCard.classList.add("box__card");
    boxCard.classList.add(classPal);
  }

  function manageCardTypography() {
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


    for (const value of typographiesValue) {
      boxFont.classList.remove(value);
    }


    boxFont.classList.add("userInfo");
    boxFont.classList.add(classTyp);
  }

  function fillCard() {
    fillCardName();
    fillCardJob();
    fillCardImage();
    fillCardEmail();
    fillCardPhone();
    fillCardLinkedin();
    fillCardGithub();
    manageCardPalette();
    manageCardTypography();
  }

  if (result === 9) {
    handlerReset();
  } else {
    fillCard();
  }
}


window.addEventListener("load", printLocalStorage);
