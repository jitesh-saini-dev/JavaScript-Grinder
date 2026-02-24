//swap the values using dom
let a = document.getElementById("div1");
let b = document.getElementById("div2");
let swap = document.querySelector(".btn");
swap.addEventListener("click", () => {
    console.log("hlo");
    
  let temp = a.innerText;
  a.innerText = b.innerText;
  b.innerText = temp;
  
}
);