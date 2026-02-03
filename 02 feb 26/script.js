// 1. Check whether a given number is number or not.

// function Check(a) {
//   if (typeof a === "number") return true;
//   else return false;
// }
// let ans = Check(5);
// console.log(ans);

// 10. Find the maximum of 10, 5, 8, 20.

// arr = [10, 5, 8, 20];
// function maxx(arr) {
//   let largest = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       largest = arr[i];
//     }
//   }
//   console.log(largest);
// }
// maxx(arr)

// 11. Find the minimum of 3, 7, 1, 9.

// arr = [10, 5, 8, 20];
// function maxx(arr) {
//   let minimum = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < minimum) {
//       minimum = arr[i];
//     }
//   }
//   console.log(minimum);
// }
// maxx(arr);

// 12. Generate a random number between 0 and 1.

// let a = Math.random();
// console.log(a);

// 13. Generate a random integer between 1 and 10.

// let a = Math.floor(Math.random()*11);
// console.log(a);

// 14. Check whether a number is positive, negative, or zero.

// let checknum = (elem) => {
//   if (elem === 0) console.log("zero");
//   else if (elem > 0) console.log("+ve");
//   else console.log("-ve");
// };
// checknum(-2);


// 19. Generate a random integer between 50 and 100.


// let a = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
// console.log(a);


// 30. Find the random OTP of 6 digit

// let a = Math.floor(Math.random() * (1000000 - 100000 + 1)) + 100000;
// console.log(a);


// 25. Find the factorial of a number.
// let factorial=(n)=>{
//   let fact=1;
//   for(let i=1;i<=n;i++){
//     fact*=i;
//   }
//   console.log(fact); 
// }
// factorial(5)