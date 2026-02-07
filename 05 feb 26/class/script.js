//counter = 0 ;
let countdata1 = document.getElementById("countdata1");
let countdata2 = document.getElementById("countdata2");
let counterbtn1 = document.getElementById("counterbtn1");
let counterbtn2 = document.getElementById("counterbtn2");

function Counter() {
  let count = 0;
  return function (countdata) {
    // console.log(count);
    countdata.innerText = count;
    return ++count;
  };
}
let res1 = Counter();
let res2 = Counter();
// console.log(res());
// console.log(res());
// console.log(res());

counterbtn1.addEventListener("click", () => {
  res1(countdata1);
});
counterbtn2.addEventListener("click", () => {
  res2(countdata2);
});
