// 49. Pair with Sum
const pair = (arr, t) => {
  let s = new Set();
  for (let n of arr) {
    if (s.has(t - n)) return [t - n, n];
    s.add(n);
  }
  return "No Pair";
};
console.log(pair([1, 5, 7, 1], 6));
