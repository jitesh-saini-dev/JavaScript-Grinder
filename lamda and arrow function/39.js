// 39. Freq of string in sentence
const freq = (s, w) => s.split(' ').filter(x => x === w).length;
console.log(freq("hi hello hi", "hi"));