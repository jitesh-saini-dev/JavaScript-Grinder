// 60. Palindrome Number
const isPal = n => String(n) === String(n).split('').reverse().join('');
console.log(isPal(121));