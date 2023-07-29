let main_body=document.getElementById("main-body")
let Name=document.getElementById("name")
let Email=document.getElementById("email")
let Password=document.getElementById("pass")
let ConfirmPass=document.getElementById("pass2")
let Button=document.getElementById("btn")
let Massage=document.getElementById("msg")
let form=document.getElementById("form")
function setItem(e){
    e.preventDefault()
    console.log("inside set item")
   
    let nameVal=Name.value;
    let emailVal=Email.value;
    let passVal=Password.value;
    let confirmPassVal=ConfirmPass.value;
    var user={
        username:nameVal,
        email:emailVal,
        password:passVal,
        confirmpass:confirmPassVal,
       Token:token
    };
    //form validation
    if((nameVal=="")||(emailVal=="")||(passVal=="")||(confirmPassVal=="")){
      
     Massage.style.color="red"
     Massage.textContent="Error : All the fields are mandatory"
    }else if( confirmPassVal!= passVal){
        Massage.style.color="red"
        Massage.textContent="Error : Password and confirm password not match"
    }
    else{
        Massage.style.color="green"
        Massage.textContent="Successfully signed Up!"
        
        //store user in local storage
        localStorage.setItem("User",JSON.stringify(user))
        window.location.href ="./profile.html";
    }
}
Button.addEventListener("click",setItem)
const token=generateAccessToken()

function generateAccessToken() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let token = "";
    for (let i = 0; i < 16; i++) {
      token += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return token;
  }
 