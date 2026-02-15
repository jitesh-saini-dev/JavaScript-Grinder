// 29. First repeating character
const firstRep = s => s.split('').find((c, i, a) => a.indexOf(c) !== i);
console.log(firstRep("programming"));