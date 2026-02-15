// 59. Fibonacci Recursion
const fib = n => n<=1 ? n : fib(n-1)+fib(n-2);
console.log(fib(6));