// 46. Second Largest
const secMax = arr => [...new Set(arr)].sort((a,b)=>b-a)[1];
console.log(secMax([1,5,2,5,3]));