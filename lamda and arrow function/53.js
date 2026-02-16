// 53. Remove Duplicates From Sorted Array
const remDupS = (arr) => [...new Set(arr)];
console.log(remDupS([1, 1, 2, 2, 3]));
