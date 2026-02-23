const str = "prajjal is bad boy";
// remove vowels
const vowels = "aeiouAEIOU";
const ans = str
  .split(" ")
  .map((x) =>
    x
      .split("")
      .filter((x) => !vowels.includes(x))
      .join(""),
  )
  .join(" ");
// console.log(ans);
// const res = vowels.split("").includes("a");
console.log(ans);

