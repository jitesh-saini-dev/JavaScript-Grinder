// let followbtn = document.getElementById("followbtn");
// let usernamehtml = document.getElementById("username");
// let username = "Rohan";
// function adduser(name) {
//   usernamehtml.innerText = name;
// }
// adduser(username);

// let count = 0;
// followbtn.addEventListener("click", () => {
//   count++;
//   alert(`Thanks for following ${username}. You have followed ${count} times.`);
// });

//------------------------------------------------------------------------------

// let count=0;
// document.addEventListener("click", (e) => {
//     count++;
//   alert(`${e.target.name ?? "user"} is followed you ${count} times.`);

// });

//------------------------------------------------------------------------------

// let name1 = document.getElementById("name1");
// let name2 = document.getElementById("name2");
// let name3 = document.getElementById("name3");
// let btn1 = document.getElementById("btn1");
// let btn2 = document.getElementById("btn2");
// let btn3 = document.getElementById("btn3");

// let count = 0;

// btn1.addEventListener("click", () => {
//   count++;
//   alert(`${name1.innerText} is followed you ${count} times.`);
// });
//  count = 0;

// btn2.addEventListener("click", () => {
//   count++;
//   alert(`${name2.innerText} is followed you ${count} times.`);
// });
//  count = 0;

// btn3.addEventListener("click", () => {
//   count++;
//   alert(`${name3.innerText} is followed you ${count} times.`);
// });

//------------------------------------------------------------------------------

let name1 = document.getElementById("name1");
let name2 = document.getElementById("name2");
let name3 = document.getElementById("name3");

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");

function FollowHandler(e) {
  let count = 0;

  return function () {
    count++;
    alert(`You have followed ${e.innerText} ${count} times.`);
  };
}

btn1.addEventListener("click", FollowHandler(name1));
btn2.addEventListener("click", FollowHandler(name2));
btn3.addEventListener("click", FollowHandler(name3));
