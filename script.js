//Declaration
const form=document.querySelector("#form");
const username=document.querySelector("#username");
const email=document.querySelector("#email");
const password=document.querySelector("#password");
const password2=document.querySelector("#password2");

//add Events
form.addEventListener('submit',e=>{
    e.preventDefault();

   form_verify();
})

//function
  function form_verify(){

//obtenir les value de les inputs
  const userValue=username.value.trim();
  const emailValue=email.value.trim();
  const pwdValue=password.value.trim();
  const pwd2Value=password2.value.trim();

  //verify_username
  if(userValue===""){
    let message="cette champ est vide";
    setError(username,message);
  }else if(!userValue.match(/^[a-zA-Z]/)){
    let message="cette champ est commance par un lettre";
    setError(username,message);
  }else{
    let letterNum=userValue.length;
    if(letterNum < 3){
        let message="cette champ doit demande au moin 3 caracter";
        setError(username,message);
    }else{
        setSuccess(username);
    }
  }

  //verify_email
  if(emailValue===""){
    let message="cette champ est vide";
    setError(email,message);
  }else if(!email_verify(emailValue)){
    let message="no validé";
    setError(email,message);
  }else{
    setSuccess(email);
  }

//   //verify_password
  if(pwdValue===""){
    let message="cette champ est vide";
    setError(password,message);
  }else {
     let letterNum=pwdValue.length;
    if(letterNum < 6){
        let message="cette champ est commance au moin a 6 caracter";
        setError(password,message);
    }else{
        setSuccess(password);
    }
  }
  //verify_password2
  if(pwd2Value===""){
    let message="cette champ est vide";
    setError(password2,message);
  }else if(pwd2Value!==pwdValue){
    let message="cette confirmation fault";
    setError(password2,message);
  }else{
    setSuccess(password2)
  }
  //function setError
  function setError(elem,message){
    const formControl=elem.parentElement;
    const small=formControl.querySelector("small");

    //ajouter message d'error
    small.innerText=message;
    
    //ajouter la class error
    formControl.className="form-control error";
  }

 //function setSuccess
  function setSuccess(elem){
    const formControl=elem.parentElement;
    formControl.className="form-control success";
  }

   //function verify_email
 function email_verify(email){
    return /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/.test(email);
 }
}