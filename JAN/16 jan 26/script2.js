// function evenodd(n) {
//   return n % 2 === 0;
// }
// // let res1 = evenodd(5);
// // console.log(res1);

// function hellojs(){
//   console.log("hello-JS");

// }

// function factorial(n) {
//   let fact = 1;
//   for (let i = 1; i <= n; i++) {
//     fact *= i;
//   }
//   return fact;
// }
// // let res2 = factorial(5);
// // console.log(res2);

// function fibonacci(n) {
//   let a = 0;
//   let b = 1;
//   let sum;
//   for (let i = 2; i < n; i++) {
//     sum = a + b;
//     console.log(sum);
//     a = b;
//     b = sum;
//   }
//   return sum;
// }
// // let res3 = fibonacci(5);
// // console.log(res3);

// function sumofarray(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }
// // let res4 = sumofarray([1, 2, 3, 4, 5]);
// // console.log(res4);

// let obj = {
//   evenodd,
//   fibonacci,
//   factorial,
//   sumofarray,
//   hellojs,
// };

// // let res1 = obj.evenodd(12);
// // console.log(res1);

// // let res2 = obj.fibonacci(7);
// // console.log(res2);

// // let res3 = obj.factorial(5);
// // console.log(res3);

// // let res4 = obj.sumofarray([1, 2, 3, 4, 5]);
// // console.log(res4);

// // obj.hellojs();
//----------------------------------------------------------------------

// function outer() {
//   function sumofarray(arr) {
//     let sum=0;
//     for(let i=0;i<arr.length;i++){
//       sum+=arr[i];
//     }
//     return sum;
//   }

//   let obj = {
//     evenodd,
//     fibonacci,
//     factorial,
//     sumofarray,
//     hellojs,
//   };
//   return obj;
// }

// let resss=outer();

// let res1 = resss.evenodd(12);
// console.log(res1);

// let res2 = resss.fibonacci(7);
// console.log(res2);

// let res3 = resss.factorial(5);
// console.log(res3);

// let res4 = resss.sumofarray([1, 2, 3, 4, 5]);
// console.log(res4);

// resss.hellojs();
//----------------------------------------------------------------------

// (function(){
//   var a=5;
//   console.log(a);
// })();
//   console.log(a);

// (function(){
//    console.log(a);//undefined bcz of hoiting in IIFE.
//   var a=5;

// })();
// console.log(a);
// IIFE ek block create krta h or vhi pr hi destroy ho jata h bcz turant call k bad burst joki ki parantesis me bna tha
//----------------------------------------------------------------------
// for (var i = 0; i < 3; i++) {
//   (function () {
//     console.log(i);
//   })();//IIfee yhi tk tha isliye iske bahar toh ho skta h 
// }
// console.log(i);
//----------------------------------------------------------------------

const obj = { a: 10 }; 
obj.a = 20; 
obj = { a: 30 }; 
console.log(obj.a); 
