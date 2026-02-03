let usernamehtml = document.getElementById("username");
let designationhtml = document.getElementById("designation");
let followerhtml = document.getElementById("followers");
let followinghtml = document.getElementById("following");
let subscribershtml = document.getElementById("subscribers");
function getName(name, designation, followers, following, subscribers) {
  usernamehtml.innerText = name;
  designationhtml.innerText = designation;
  followerhtml.innerText = followers + "K";
  followinghtml.innerText = following + "K";
  subscribershtml.innerText = subscribers;
}
// getName("Shaurya", "Freelance Web Designer");
getName("Karan Singh", "Mern Stack Devloper", "20", "45", "700");

//username, userdesignation, followers, following, subscribers
