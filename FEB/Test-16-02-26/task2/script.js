//print reverse of a string

let input = document.getElementById("inputt");
let reverse = document.querySelector(".div2");
input.addEventListener("keyup", () => {
  let str= input.value;
  console.log(str);
  
  let rev="";
  for(let i = str.length - 1; i >= 0; i--){
    rev += str[i];
  }
  reverse.innerText = `Reverse: ${rev}`;
});
