// 42. Missing number range
const missR = arr => { let min=Math.min(...arr), max=Math.max(...arr); return [...Array(max-min+1).keys()].map(i=>i+min).filter(n=>!arr.includes(n)); };
console.log(missR([10, 12, 13]));