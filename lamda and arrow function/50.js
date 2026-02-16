// 50. Move all zeroes and 1 and two make it sort [1,1,1,1,2,2,0,0,0,0,2,2,1,1,1] (without sorting method)
const sort012 = (arr) => [
  ...arr.filter((x) => x == 0),
  ...arr.filter((x) => x == 1),
  ...arr.filter((x) => x == 2),
];
console.log(sort012([1, 1, 1, 1, 2, 2, 0, 0, 0, 0, 2, 2, 1, 1, 1]));
