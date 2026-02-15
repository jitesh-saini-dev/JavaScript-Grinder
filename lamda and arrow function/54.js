// 54. Longest Subarray Equal 0s 1s
const maxLen = arr => { let map={0:-1}, max=0, sum=0; arr.forEach((x,i)=>{ sum += x==0?-1:1; if(sum in map) max=Math.max(max, i-map[sum]); else map[sum]=i; }); return max; };
console.log(maxLen([0,1,0]));