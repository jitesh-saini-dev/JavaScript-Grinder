let button = document.getElementById("btntoggle");
let followbtn = document.getElementById("followbtn");
let usernamehtml = document.getElementById("username");
let username = "Rohan";
function adduser(name) {
  usernamehtml.innerText = name;
}
adduser(username);
const body = document.body;
button.addEventListener("click", () => {
  body.classList.toggle("bg-black");
  body.classList.toggle("bg-white");
  body.classList.toggle("text-white");
  body.classList.toggle("text-black");

  if (body.classList.contains("bg-black")) {
    button.innerText = "Light Mode";
  } else {
    button.innerText = "Dark Mode";
  }
});
followbtn.addEventListener("click", () => {
  alert(`Thanks for follwing ${username}`);
});
