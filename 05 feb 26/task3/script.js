let followbtn = document.getElementById("followbtn");
let usernamehtml = document.getElementById("username");
let username = "Rohan";
function adduser(name) {
  usernamehtml.innerText = name;
}
adduser(username);

let count = 0;
followbtn.addEventListener("click", () => {
  count++;
  alert(`Thanks for follwing ${username}. You have followed ${count} times.`);
});
