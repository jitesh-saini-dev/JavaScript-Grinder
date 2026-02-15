// 48. Frequency of elements
const freq = arr => arr.reduce((acc, c) => (acc[c]=(acc[c]||0)+1, acc), {});
console.log(freq([1,2,2,1,3]));