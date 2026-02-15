// let btn1 = document.getElementById("btn1");
// let firsth1 = document.getElementById("firsth1");

// let btn2 = document.getElementById("btn2");
// let secondh1 = document.getElementById("secondh1");

// let btn3 = document.getElementById("btn3");
// let thirdh1 = document.getElementById("thirdh1");


// let btn4 = document.getElementById("btn4");
// let fourthh1 = document.getElementById("fourthh1");

// let num1 = 0;
// let num2 = 0;

// btn1.addEventListener("click", function () {
//   num1 = +prompt("Enter First Number:");
//   firsth1.innerText = num1;
// });

// btn2.addEventListener("click", function () {
//   num2 = +prompt("Enter Second Number:");
//   secondh1.innerText = num2;
// });

// btn3.addEventListener("click", function () {
//   let sumtotal = num1 + num2;
//   thirdh1.innerText = sumtotal;
// });

// btn4.addEventListener("click", function () {
//   let multotal = num1 * num2;
//   fourthh1.innerText = multotal;
// });



//--------------WITH CLOUSER--------------


function calculatorClosure() {
  let num1 = 0;
  let num2 = 0;

  let btn1 = document.getElementById("btn1");
  let firsth1 = document.getElementById("firsth1");

  let btn2 = document.getElementById("btn2");
  let secondh1 = document.getElementById("secondh1");

  let btn3 = document.getElementById("btn3");
  let thirdh1 = document.getElementById("thirdh1");

  let btn4 = document.getElementById("btn4");
  let fourthh1 = document.getElementById("fourthh1");

  btn1.addEventListener("click", function () {
    num1 = +prompt("Enter First Number:");
    firsth1.innerText = num1;
  });

  btn2.addEventListener("click", function () {
    num2 = +prompt("Enter Second Number:");
    secondh1.innerText = num2;
  });

  btn3.addEventListener("click", function () {
    thirdh1.innerText = num1 + num2;
  });

  btn4.addEventListener("click", function () {
    fourthh1.innerText = num1 * num2;
  });
}

calculatorClosure();
