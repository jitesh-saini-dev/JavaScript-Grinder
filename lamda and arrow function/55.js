// 55. Valid Parentheses
const isValid = s => { let b=0; for(let c of s){ if(c=='(')b++; else b--; if(b<0)return false;} return b===0; };
console.log(isValid("(()())"));