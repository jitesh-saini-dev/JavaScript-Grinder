let inc = document.getElementById("inc");
let dec = document.getElementById("dec");
let counter = document.getElementById("counter");
let upper = document.getElementById("upper");

let count = 0;
inc.addEventListener("click", () => {
  ++count;
  counter.innerText = count;
  upper.innerText = `Card is clicked ${count}`;
});

dec.addEventListener("click", () => {
  upper.innerText = `Card is clicked ${count}`;

  --count;
  counter.innerText = count;
});
