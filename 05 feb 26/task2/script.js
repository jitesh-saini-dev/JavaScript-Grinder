let Followbtn = document.getElementById("Followbtn");
let username = document.getElementById("username");


let usernameprom = prompt("Tell us the UserName ?");
function naming(elem) {
  username.innerText = elem;
}
naming(usernameprom);


Followbtn.addEventListener("click", () => {
  alert(`You have followed ${username.innerText}`);
  Followbtn.innerText = "Following";
});
