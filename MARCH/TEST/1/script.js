let input1 = document.getElementById("input1");
let btn1 = document.getElementById("btn1");
let div5 = document.getElementsByClassName("div5");
let addh2 = document.getElementById("addh2");
// console.log(input1);

btn1.addEventListener("click", function () {
  let h2 = document.createElement("h2");
  h2.innerText = input1.value;
  addh2.appendChild(h2);
});
