// 40. Longest word info
const longInfo = s => { const w = s.split(' ').reduce((a,b)=>a.length>b.length?a:b); return {word: w, len: w.length}; };
console.log(longInfo("I love coding"));