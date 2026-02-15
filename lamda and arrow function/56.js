// 56. Next Greater Element
const nextG = arr => { let res=[], st=[]; for(let i=arr.length-1; i>=0; i--){ while(st.length && st[st.length-1]<=arr[i]) st.pop(); res[i]=st.length?st[st.length-1]:-1; st.push(arr[i]); } return res; };
console.log(nextG([4,5,2,25]));