// 43. Min length substring distinct
const minWin = s => { let u=new Set(s).size, min=Infinity, res=""; for(let i=0;i<s.length;i++) for(let j=i+1;j<=s.length;j++){ let sub=s.slice(i,j); if(new Set(sub).size===u && sub.length<min){ min=sub.length; res=sub; }} return res; };
console.log(minWin("aabcbcdbca"));