// let inc = document.getElementById("inc");
// let dec = document.getElementById("dec");
// let counter = document.getElementById("counter");
// let upper = document.getElementById("upper");

// let count = 0;
// inc.addEventListener("click", () => {
//   ++count;
//   counter.innerText = count;
//   upper.innerText = `Card is clicked ${count}`;
// });

// dec.addEventListener("click", () => {
//   upper.innerText = `Card is clicked ${count}`;

//   --count;
//   counter.innerText = count;
// });

// Above code is for single card, below code is for multiple cards--------------

const cards = document.querySelectorAll(".div1");

cards.forEach((card) => {
  let count = 0;
  let totalClicks = 0;

  let inc = card.querySelector(".inc");
  let dec = card.querySelector(".dec");
  let counter = card.querySelector(".counter");
  let upper = card.querySelector(".upper");

  inc.addEventListener("click", () => {
    count++;
    totalClicks++;
    counter.innerText = count;
    upper.innerText = `Card is clicked ${totalClicks}`;
  });

  dec.addEventListener("click", () => {
    count--;
    totalClicks++;
    counter.innerText = count;
    upper.innerText = `Card is clicked ${totalClicks}`;
  });
});
