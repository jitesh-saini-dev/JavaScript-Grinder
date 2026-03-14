// const user = { name: "Amit", info: { age: 25, city: "Delhi" } };
// const {
//   info: { city },
// } = user;
// console.log(city);

// const employee = {
//   id: 101,
//   personalInfo: {
//     name: "Hemant",
//     contact: {
//       email: "hemant@example.com",
//       phone: "9876543210",
//     },
//   },
// };
// let updated = {
//   ...employee,
//   personalInfo: {
//     ...employee.personalInfo,
//     contact: {
//       ...employee.personalInfo.contact,
//       email: "hemant@gmail.com",
//     },
//   },
// };
// console.log(updated);

// const company = {
//   id: "C101",
//   name: "Tech Solutions",
//   employees: [
//     {
//       id: 101,
//       personalInfo: {
//         name: "Hemant",
//         contact: {
//           email: ["hemant@work.com", "hemant@personal.com"],
//           phone: { home: "123", office: "987" },
//         },
//         address: emp.personalInfo.address.map((addr) =>
//           addr.city === "Delhi" ? { ...addr, city: "Kolkata" } : addr,
//         ),
//       },
//     },
//   ],
// };

// let updated = {
//   ...company,
//   employees: {
//     ...company.employees,
//     personalInfo: {
//       ...company.employees.personalInfo,
//       address: [...company.employees.personalInfo.address[0], { city: "jpr" }],
//     },
//   },
// };
// console.log(updated);

// const company = {
//   id: "C101",
//   name: "Tech Solutions",
//   employees: [
//     {
//       id: 101,
//       personalInfo: {
//         name: "Hemant",
//         contact: {
//           email: ["hemant@work.com", "hemant@personal.com"],
//           phone: { home: "123", office: "987" },
//         },
//         address: [
//           { type: "current", city: "Jaipur" },
//           { type: "permanent", city: "Delhi" },
//         ],
//       },
//     },
//   ],
// };

// const updatedCompany = {
//   ...company,
//   employees: company.employees.map((emp) => ({
//     ...emp,
//     personalInfo: {
//       ...emp.personalInfo,
//       address: emp.personalInfo.address.map((addr) =>
//         addr.city === "Delhi" ? { ...addr, city: "Kolkata" } : addr
//       ),
//     },
//   })),
// };

// console.log(updatedCompany);

// const cart = [
//   { id: 1, name: "Laptop", qty: 1 },
//   { id: 2, name: "Mouse", qty: 2 },
// ];

// const newProduct = { id: 2, name: "Keyboard", qty: 1 };

// let updated = cart.some(i => i.id === newProduct.id)
//   ? cart
//   : [...cart, newProduct];

// console.log(updated);

// const cart = [
//   { id: 1, name: "Laptop", qty: 1 },
//   { id: 2, name: "Mouse", qty: 2 },
// ];

// const productId = 2;
// const newQty = 5;

// let updated = cart.map((x) => (x.id === productId ? { ...x, qty: newQty } : x));
// console.log(updated);

// const employee = {
//   id: 101,
//   name: "Rahul",
//   role: "Developer",
// };

// const isPromoted = false;
// let updated = isPromoted ? { ...employee, salary: 900000 } : employee;
// console.log(updated);

// const state = {
//   isLoggedIn: false,
//   theme: "dark",
// };

// let updated1 = {
//   isLoggedIn: !state.isLoggedIn,
//   theme: state.theme === "dark" ? "white" : "dark",
// };
// let updated2 = {
//   isLoggedIn: !updated1.isLoggedIn,
//   theme: updated1.theme === "dark" ? "white" : "dark",
// };
// console.log(state);
// console.log(updated1);
// console.log(updated2);




const users = [
  {
    id: 1,
    name: "Rahul",
    email: "rahul@gmail.com",
    age: 28,
    city: "Delhi",
    role: "customer",
    isActive: true,
    createdAt: "2024-01-10",
  },
  {
    id: 2,
    name: "Sneha",
    email: "sneha@gmail.com",
    age: 25,
    city: "Mumbai",
    role: "customer",
    isActive: true,
    createdAt: "2024-02-15",
  },
  {
    id: 3,
    name: "Amit",
    email: "amit@gmail.com",
    age: 30,
    city: "Bangalore",
    role: "customer",
    isActive: false,
    createdAt: "2024-03-20",
  },
];

const orders = [
  {
    orderId: 101,
    userId: 1,
    productName: "Laptop",
    category: "Electronics",
    price: 75000,
    quantity: 1,
    paymentMethod: "UPI",
    orderStatus: "Delivered",
    orderDate: "2024-05-01",
  },
  {
    orderId: 102,
    userId: 1,
    productName: "Mouse",
    category: "Electronics",
    price: 800,
    quantity: 2,
    paymentMethod: "Card",
    orderStatus: "Shipped",
    orderDate: "2024-05-05",
  },
  {
    orderId: 103,
    userId: 2,
    productName: "Book",
    category: "Education",
    price: 450,
    quantity: 1,
    paymentMethod: "COD",
    orderStatus: "Delivered",
    orderDate: "2024-05-07",
  },
  {
    orderId: 104,
    userId: 2,
    productName: "Lipstick",
    category: "Beauty",
    price: 4500,
    quantity: 4,
    paymentMethod: "COD",
    orderStatus: "Delivered",
    orderDate: "2024-05-08",
  },
];

//create indexing
let orderperuser = orders.reduce((acc, order) => {
  acc[order.userId] = [
    acc[order.userId] ? [...acc[order.userId], order] : order,
  ];
  return acc;
}, {});
console.log(orderperuser);