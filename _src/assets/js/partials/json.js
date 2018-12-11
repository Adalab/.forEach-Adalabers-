
function createCardData (){

  const boxEl = document.querySelector("#box");
  let colorValue = boxEl.value;
  const userInfoEl = document.querySelector("#userInfo");
  let fontValue = userInfoEl.value;
  const userNameEl = document.querySelector(".userInfo__name");
  let nameDataValue = userNameEl.value;
  const userJobEl = document.querySelector(".userInfo__job");
  let jobDataValue = userJobEl.value;
  const userTelEl = document.querySelector(".mobile");
  let telDataValue = userTelEl.href;
  const userEmailEl = document.querySelector(".email");
  let emailDataValue = userEmailEl.href;
  const userLinkedinEl = document.querySelector(".linkedin");
  let linkedinDataValue = userLinkedinEl.href;
  const userGithubEl = document.querySelector(".github");
  let githubDataValue = userGithubEl.href;
  const userImgEl = document.querySelector(".image-preview__file");
  let imgDataValue = userImgEl.style.backgroundImage;


  let data = {
    palette: colorValue,
    typography: fontValue,
    name: nameDataValue,
    job: jobDataValue,
    phone: telDataValue,
    email: emailDataValue,
    linkedin: linkedinDataValue,
    github: githubDataValue,
    photo: imgDataValue,
    skills: ["HTML", "Sass", "JavaScript"]
  }
}

