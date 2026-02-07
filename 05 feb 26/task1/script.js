let countt = document.getElementsByClassName("countt");
let btn = document.getElementsByClassName("btn");

function increasecount(index) {
  let count = 0; 

  return function () {
    count++;
    countt[index].innerHTML = count;
  };
}

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", increasecount(i));
}
