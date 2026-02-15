// 35. Extract substrings manually
const allSub = s => { let arr=[]; for(let i=0; i<s.length; i++) for(let j=i+1; j<=s.length; j++) arr.push(s.slice(i, j)); return arr; };
console.log(allSub("abc"));