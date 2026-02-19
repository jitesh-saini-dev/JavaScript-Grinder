// 41. Missing number 1-n (without reduce)
const miss = (arr, n) => {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return (n * (n + 1)) / 2 - sum;
};

console.log(miss([1, 2, 4, 5], 5));
