// 47. Move Zeroes to End
const move0 = arr => [...arr.filter(n=>n!==0), ...arr.filter(n=>n===0)];
console.log(move0([0,1,0,3,12]));