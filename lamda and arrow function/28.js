// 28. Remove duplicate chars
const remDup = s => [...new Set(s)].join('');
console.log(remDup("banana"));