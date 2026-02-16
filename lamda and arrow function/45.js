// 45. Majority Element
const major = (nums) => nums.sort()[Math.floor(nums.length / 2)];
console.log(major([3, 2, 3, 1, 2, 4, 3]));
