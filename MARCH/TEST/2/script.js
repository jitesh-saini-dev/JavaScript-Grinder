// let arr = [false, "", 10, undefined, 3, "-5"];
// let ans = arr.filter((x) => {
//   return x;
// });
// console.log(ans);

// write a program of promise chaining
// let promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Hello");
//   }, 1000);
// });

// promise1
//   .then((res) => {
//     console.log(res);
//     return "World";
//   })
//   .then((res) => {
//     console.log(res);
//     return "!";
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

//grouping on basis of age 25
// let arr = [
//   { name: "amit", age: 25 },
//   { name: "anit", age: 20 },
//   { name: "aswin", age: 25 },
//   { name: "mukes", age: 21 },
// ];

// let ans = arr.reduce((acc, curr) => {
//   if (curr.age === 25) {
//     acc.push(curr);
//   }
//   return acc;
// }, []);
// console.log(ans);

// let ans = Math.floor(Math.random() * 1000000);
// console.log(ans);

// let str = "hlo world from the JS";
// let str2="";
// for(let i=0;i<str.length;i++){
//     if(str[i]!=' '){
//         str2+=str[i];
//     }
// }
// console.log(str2);

// function abc() {
//   console.log("hlo function 1");
// }
// abc();
// async function cde() {
//   setTimeout(() => {
//     console.log("function2");
//   }, 2000);
// }
// cde();

let ans = fetch("https://fakestoreapi.com/users");

function abc() {}
abc();
async function cde() {
  setTimeout(() => {
    console.log("function2");
  }, 2000);
}
cde();
