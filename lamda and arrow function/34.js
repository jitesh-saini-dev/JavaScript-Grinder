// 34. Substrings len K unique
const subK = (s, k) => { let res=[]; for(let i=0; i<=s.length-k; i++) { let sub = s.substr(i, k); if(new Set(sub).size === k) res.push(sub); } return res; };
console.log(subK("abacaba", 3));