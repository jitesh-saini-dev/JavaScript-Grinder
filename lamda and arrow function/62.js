// 62. Merge Sorted Arrays
const mergeS = (a, b) => [...a, ...b].sort((x, y) => x - y);
console.log(mergeS([1, 3], [2, 4]));
