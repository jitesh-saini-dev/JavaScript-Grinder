// 52. Max Vowels in K
const maxV = (s, k) => { let max=0; const isV = c=>/[aeiou]/i.test(c); for(let i=0; i<=s.length-k; i++) max = Math.max(max, [...s.substr(i,k)].filter(isV).length); return max; };
console.log(maxV("abciiidef", 3));