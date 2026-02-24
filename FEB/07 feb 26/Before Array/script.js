// //anonymous function
// () => { };

//lambda function(no curly brackets, auto return)
// const abc=()=>

//sum of two numbers
// let num1 = 5,
//     num2 = 3;
// const sum = (num1, num2) => num1 + num2;
// console.log(sum(num1, num2));

// // mul of 2 numbers
// let num1 = 7,
//     num2 = 8;
// const mul = (num1, num2) => num1 * num2;
// console.log(mul(num1, num2));

//odd number and even number output boolean
// const num = 8;
// const eventodd = (num) => (num % 2 == 0 ? 1 : 0);
// console.log(eventodd(num));

// const num = 8;
// const eventodd = (num) => (num % 2 == 0 ? "even" : "odd");
// console.log(eventodd(num));

// const num = -100;
// const posnegzero = (num) =>
//   num === 0 ? "ZERO" : num > 0 ? "positive" : "negative";
// console.log(posnegzero(num));

// 3rd power of 2 = 2^3 = 8 ;
// const power = 3;
// const num = 2;
// const ans = num ** power;
// console.log(ans);

// let num1 = 5;
// let num2 = 6;
// [num1, num2] = [num2, num1];
// console.log(num1, num2);

//function arguments bhejna hai
// const abc = (...rest) => {
//   console.log(rest);
// };
// abc(1, 2, 3, 4, 5, 6, 67);
// function abc() {
//   console.log(arguments[0]);
// }
// abc(1, 2, 3, 4, 5, 6, 67);

// const abc = [1, 2, 3, 4]; //data-structure
// const [a, b, c, d] = abc; //data-destructure
// console.log(a, b, c, d);

// let a = 5,
//   b = 7,
//   c = 8;
// const arr = [a, b, c];//data structure
// console.log(arr);
// const [e, f, g] = arr;//data de-structuring
// console.log(e, f, g);

// destructring: spread(array) rest(function)
// const arr = [1, 2, 3, 4, 5, 6, 7];
// const [a, b, ...c] = arr;
// console.log(c);