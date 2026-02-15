// 63. First Non Repeating Char
const first = (s) => s.split("").find((c) => s.indexOf(c) === s.lastIndexOf(c));
console.log(first("aabccbd"));
