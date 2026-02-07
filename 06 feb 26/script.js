let btn1_incr = document.getElementById("btn1_incr");
let btn1_dec = document.getElementById("btn1_dec");
let btn2_incr = document.getElementById("btn2_incr");
let btn2_dec = document.getElementById("btn2_dec");
let data1 = parseInt(document.getElementById("data1").innerText);
let data2 = parseInt(document.getElementById("data2").innerText);
let text_incr = document.getElementById("text_incr");
let text_dec = document.getElementById("text_dec");
// state variables Html

// console.log(typeof data1, typeof data2);

function Counter(count) {
  console.log(count); // 0 10
  return {
    increment: (data) => {
      ++count;
      console.log("increment:", count);
      document.getElementById(`${data}`).innerText = count;
      return count;
    },
    decrement: (data) => {
      --count;
      console.log("decrement", count);
      document.getElementById(`${data}`).innerText = count;
      return count;
    },
    reset: () => {
      return (count = 0);
    },
  };
}
let res1 = Counter(data1); //html ka variable data1 = 0
let res2 = Counter(data2); //data2=10;

function toggleIncrement() {
  text_incr.classList.add("text-blue-500");
  text_dec.classList.add("text-white");

  text_incr.classList.remove("text-white");
  text_dec.classList.remove("text-blue-500");
}
function toggleDecrement() {
  text_incr.classList.remove("text-blue-500");
  text_dec.classList.add("text-blue-500");

  text_incr.classList.add("text-white");
  text_dec.classList.remove("text-white");
}

btn1_incr.addEventListener("click", () => {
  toggleIncrement();
  res1.increment("data1");
});
btn1_dec.addEventListener("click", () => {
  toggleDecrement();
  res1.decrement("data1");
});

btn2_incr.addEventListener("click", () => {
  toggleIncrement();
  res2.increment("data2");
});
btn2_dec.addEventListener("click", () => {
  toggleDecrement();
  res2.decrement("data2");
});

// console.log(res1.increment());
// console.log(res1.increment());
// console.log(res1.increment());
// console.log(res1.decrement());
// console.log(res1.decrement());
// console.log(res1.reset());

// //res2
// console.log(res2.increment());
// console.log(res2.increment());
// console.log(res2.increment());
// console.log(res2.decrement());
// console.log(res2.decrement());
// console.log(res2.reset());
