//new id should be added in arr if its not present in that arr

let obj = {
  id: 1,
  name: "Jitesh",
  address: "Jaipur",
  phone: 9876543210,
  arr: [1, 2, 3, 4],
};
const newid = 4;

function addId(obj, newid) {
  if (!obj.arr.includes(newid)) {
    obj.arr.push(newid);
  }
  return obj;
}

let updatedObj = addId(obj, newid);
console.log(updatedObj);