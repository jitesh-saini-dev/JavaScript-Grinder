// 27. Count vowels
const countVowels = s => (s.match(/[aeiou]/gi) || []).length;
console.log(countVowels("Apple"));