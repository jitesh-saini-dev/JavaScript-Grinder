// 36. Substrings ending with vowel
const subVowel = (s) => {
  let arr = [];
  for (let i = 0; i < s.length; i++)
    for (let j = i + 1; j <= s.length; j++) {
      let sub = s.slice(i, j);
      if (/[aeiou]/i.test(sub.slice(-1))) arr.push(sub);
    }
  return arr;
};
console.log(subVowel("hello"));
 