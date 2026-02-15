// 50. Sort 0 1 2
const sort012 = arr => [...arr.filter(x=>x==0), ...arr.filter(x=>x==1), ...arr.filter(x=>x==2)];
console.log(sort012([2,0,2,1,1,0]));