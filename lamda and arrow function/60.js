// 60. Palindrome Number
const isPalNum = (n) => {
  let rev = 0;
  let temp = n;

  while (temp > 0) {
    rev = rev * 10 + (temp % 10);
    temp = Math.floor(temp / 10);
  }

  return rev === n;
};

console.log(isPalNum(121));
