// 44. Palindrome Substring Count
const countP = (s) => {
  let c = 0;
  const p = (x) => x === x.split("").reverse().join("");
  for (let i = 0; i < s.length; i++)
    for (let j = i + 1; j <= s.length; j++) if (p(s.slice(i, j))) c++;
  return c;
};
console.log(countP("aba"));
