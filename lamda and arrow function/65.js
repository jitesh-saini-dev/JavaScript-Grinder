// 65. First non-repeating word
const firstW = (s) => {
  let w = s.split(" ");
  return w.find((x) => w.indexOf(x) === w.lastIndexOf(x));
};
console.log(firstW("this is a test this is"));
