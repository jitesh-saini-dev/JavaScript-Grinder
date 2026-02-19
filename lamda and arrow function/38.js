// 38. Largest unique substring
const maxUniq = (s) => {
  let m = "";
  for (let i = 0; i < s.length; i++)
    for (let j = i + 1; j <= s.length; j++) {
      let sub = s.slice(i, j);
      if (new Set(sub).size === sub.length && sub.length > m.length) m = sub;
    }
  return m;
};
console.log(maxUniq("pwwkew"));
