// 57. Nearest Smaller Left
const smallL = (arr) => {
  let res = [],
    st = [];
  for (let i = 0; i < arr.length; i++) {
    while (st.length && st[st.length - 1] >= arr[i]) st.pop();
    res.push(st.length ? st[st.length - 1] : -1);
    st.push(arr[i]);
  }
  return res;
};
console.log(smallL([4, 5, 2, 10, 8]));
