let input = document.getElementById("inputt");
let length = document.querySelector(".div2");

input.addEventListener("keydown", () => {
    
  length.innerText = `Lenght: ${input.value.length}`;
  
});
