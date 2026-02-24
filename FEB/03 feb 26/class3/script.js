// //callback
// agar kisi function ke andar mai ek aur function as an argument pass karte ho to usko pass karna theoritically callback bola jata hai

//data as an argument:
// function abc(name, designation) {
//   console.log(name);
//   console.log(designation);
// }
// abc("prajjal");
// abc("prajjal", "mern stack");

//sum,sub,mul
//business logic => function
function sub(a, b) {
  return a - b;
}
function sum(a, b) {
  return a + b;
}
function mul(a, b) {
  return a * b;
}
//calculator + - /
//a and b ==> data
//operation ==> function (sum,sub,mul)
function calculator(a, b, operation) {
  return operation(a, b);
}
let res1 = calculator(3, 4, sub);
console.log(res1);
let res2 = calculator(4, 8, sum);
console.log(res2);
let res3 = calculator(7, 8, mul);
console.log(res3);
