// 51. Zeroes at End (List)
const zEnd = arr => [...arr.filter(x=>x!==0), ...arr.filter(x=>x===0)];
console.log(zEnd([1,0,2,0,3]));