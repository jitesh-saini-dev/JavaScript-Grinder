// 41. Missing number 1-n
const miss = (arr, n) => (n*(n+1))/2 - arr.reduce((a,b)=>a+b, 0);
console.log(miss([1,2,4,5], 5));