let Followbtn = document.getElementById("Followbtn");
let username = document.getElementById("username");
let designation = document.getElementById("designation");
let follower = document.getElementById("follower");
let following = document.getElementById("following");
let subscribers = document.getElementById("subscribers");

let img = document.querySelector("img");

let imgPrompt = prompt("Paste your profile image URL");
if (imgPrompt) {
  img.src = imgPrompt;
}

let usernameprom = prompt("Tell us the UserName ?");
function naming(elem) {
  username.innerText = elem;
}
naming(usernameprom);

let designationprom = prompt("Tell us your Designation ?");
function designating(elem) {
  designation.innerText = elem;
}
designating(designationprom);

let followerprom = prompt("Tell us your Followers ?");
function followeringg(elem) {
  follower.innerText = `Followers
  ${elem} K`;
}
followeringg(followerprom);

let followingprom = prompt("Tell us you Following ?");
function followingg(elem) {
  following.innerText = `Following
  ${elem} K`;
}
followingg(followingprom);

let subscribersprom = prompt("Tell us your Subscribers ?");
function subscriberingg(elem) {
  subscribers.innerText = `Subscribers
  ${elem} K`;
}
subscriberingg(subscribersprom);

Followbtn.addEventListener("click", () => {
  alert(`You have followed ${username.innerText}`);
  Followbtn.innerText = "Following";
});
