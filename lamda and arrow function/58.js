// 58. Sqrt Binary Search
const mySqrt = x => { let l=1, r=x, ans=0; while(l<=r){ let mid=Math.floor((l+r)/2); if(mid*mid<=x){ ans=mid; l=mid+1; } else r=mid-1; } return ans; };
console.log(mySqrt(16));