// 51. Make all zeroes appear at the end of list [1,2,0,0,0,3,0,0,0,4] ->[1,2,3,4,0,0,0,0,0,0]
const zEnd = (arr) => [
  ...arr.filter((x) => x !== 0),
  ...arr.filter((x) => x === 0),
];
console.log(zEnd([1, 2, 0, 0, 0, 3, 0, 0, 0, 4]));
