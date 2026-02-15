// 37. Substrings even length
const subEven = s => { let arr=[]; for(let i=0; i<s.length; i++) for(let j=i+1; j<=s.length; j++) { let sub=s.slice(i,j); if(sub.length%2===0) arr.push(sub); } return arr; };
console.log(subEven("abcd"));