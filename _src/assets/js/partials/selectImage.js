// No hacer caso a la línea del FileReader, como en el mago de oz con el tipo de la cortina :)
const fr = new FileReader();

// Caso a partir de aquí :)
const uploadBtn = document.querySelector('.image-link');

const fileField = document.querySelector('#img-selector');
const profileImage = document.querySelector('.image-preview__file');

function getImage(e){
  var myFile = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);
  document.querySelector(".img").classList.add("imgWhite");
}

function writeImage() {
  profileImage.src= fr.result;
}

function fakeFileClick() {
 fileField.click(); 
}

fileField.addEventListener('change', getImage);
uploadBtn.addEventListener('click', fakeFileClick);

