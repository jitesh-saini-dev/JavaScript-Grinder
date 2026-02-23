const str = "     hi this          side               prajjal       ";
const ans = str
  .trim()
  .split(" ")
  .filter((x) => x.length > 0).length;
console.log(ans);
