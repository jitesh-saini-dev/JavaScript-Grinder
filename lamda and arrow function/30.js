// 30. Longest word no split
const longest = s => { let max='', curr=''; for(let c of s+' '){ if(c===' '){ if(curr.length > max.length) max=curr; curr=''; } else curr+=c; } return max; };
console.log(longest("Hello JavaScript World"));