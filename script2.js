let Container=document.getElementById("container")
//converting stringify version of object
let myUser=JSON.parse(localStorage.getItem("User"))
// console.log(myUser)
Container.innerHTML=`
<p class="msg">Signup Successful!</p>
<div class="profile">
<h3>Profile</h3>
<div class=img>
<img src="./Vector.png" class="img1"><br>
<img src="./Vector (1).png">
</div>
<p>Full Name:${myUser.username}</p>
<p>Email:${myUser.email}</p>
<p>Token:${myUser.Token}</p>
<p>Password:${myUser.password}</p>
<button id="btn">Logout</button>
</div>`

let button=document.getElementById("btn")
// console.log(button)
button.addEventListener("click",()=>{
    console.log("click")
    localStorage.removeItem("User");
    window.location.href="./index.html"
})