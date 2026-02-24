//eg like asa test me aa skta h ki agr vo id exist krti h to add na kro agr nhi krti h to add kro
const arr = [
  { id: 1, name: "iphone" },
  { id: 2, name: "laptop" },
  { id: 3, name: "tablet" },
];

const product = { id: 4, name: "Shoorya" };
const isProduct = arr.some((items) => items.id === product.id);
newItems = [...arr, !isProduct && product];
console.log(newItems);
