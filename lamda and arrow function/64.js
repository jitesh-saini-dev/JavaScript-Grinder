// 64. First Non Repeating Stream
const stream = (s) => {
  let h = [],
    res = [];
  s.split("").forEach((c) => {
    h.push(c);
    let u = h.find((x) => h.filter((y) => y == x).length == 1);
    res.push(u ? u : -1);
  });
  return res.join(" ");
};
console.log(stream("aabccbd"));
