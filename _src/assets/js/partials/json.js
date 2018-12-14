  let dataBack = {
    palette: "",
    typography: "",
    name: "",
    job:"",
    phone:"" ,
    email: "",
    linkedin: "",
    github: "",
    photo: "",
    skills: "",
  }


  function saveDates (){ //recojo en Localstore la cadena de dataBack
    localStorage.setItem("dataBackLocal",JSON.stringify(dataBack));
}
