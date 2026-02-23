let arr = [1, 2, 3];

let sum = arr.reduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log(sum);