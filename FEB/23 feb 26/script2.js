// Given a string, count the number of words in it. A word is defined as a sequence of non-space characters. The string may contain leading or trailing spaces, and there may be multiple spaces between words.

const str = "     hi this          side               prajjal       ";
const ans = str
  .trim()
  .split(" ")
  .filter((x) => x.length > 0).length;
console.log(ans);
