// 1️⃣ E-Commerce – Add Product to Cart
// const cart = [
//   { id: 1, name: "Laptop", qty: 1 },
//   { id: 2, name: "Mouse", qty: 2 }
// ];

// const newProduct = { id: 3, name: "Keyboard", qty: 1 };

// 👉 Create a new cart array using spread operator that adds newProduct without mutating original cart.

// const cart = [
//   { id: 1, name: "Laptop", qty: 1 },
//   { id: 2, name: "Mouse", qty: 2 }
// ];

// const newProduct = { id: 3, name: "Keyboard", qty: 1 };

// const updated=[...cart,newProduct];
// console.log(updated)

// 2️⃣ E-Commerce – Update Quantity (Immutable)
// const cart = [
//   { id: 1, name: "Laptop", qty: 1 },
//   { id: 2, name: "Mouse", qty: 2 }
// ];

// const productId = 2;
// const newQty = 5;

// 👉 Update only the product with id = productId using spread operator.

// const cart = [
//   { id: 1, name: "Laptop", qty: 1 },
//   { id: 2, name: "Mouse", qty: 2 },
// ];

// const productId = 2;
// const newQty = 5;

// const updated = cart.map((x) =>
//   x.id === productId ? { ...x, qty: newQty } : x,
// );
// console.log(cart);
// console.log(updated);

// 3️⃣ HR System – Add Employee Property Conditionally
// const employee = {
//   id: 101,
//   name: "Rahul",
//   role: "Developer"
// };

// const isPromoted = true;

// 👉 If promoted, add salary: 90000 using spread. Otherwise return unchanged object.

const employee = {
  id: 101,
  name: "Rahul",
  role: "Developer",
};

const isPromoted = true;

// let updated=isPromoted?{...employee,salary: 90000}:employee;
// console.log(employee)
// console.log(updated)

//----------other way------------

// let updated = {
//   ...employee,
//   ...(isPromoted && { salary: 90000 }),
// };
// console.log(employee);
// console.log(updated);

// 4️⃣ Doctor Management – Merge Two Objects
// const doctorBasic = {
//   name: "Dr. Sharma",
//   specialization: "Cardiology"
// };

// const doctorExtra = {
//   experience: 12,
//   rating: 4.8
// };
// 👉 Merge both objects using spread operator.

// const doctorBasic = {
//   name: "Dr. Sharma",
//   specialization: "Cardiology",
// };

// const doctorExtra = {
//   experience: 12,
//   rating: 4.8,
// };

// const updated = { ...doctorBasic, ...doctorExtra };
// console.log(updated);

// 5️⃣ Redux Style – Toggle Boolean
// const state = {
//   isLoggedIn: false,
//   theme: "dark"
// };

// 👉 Return new state where isLoggedIn is toggled using spread operator.

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
// console.log(state)
// console.log(updated1);
// console.log(updated2);

// 6️⃣ Dynamic Key Update (Form Handling)
// const formData = {
//   username: "",
//   email: "",
//   password: ""
// };

// const field = "email";
// const value = "test@gmail.com";

// 👉 Update dynamically using spread and computed property name.

// const formData = {
//   username: "",
//   email: "",
//   password: "",
// };

// const field = "email";
// const value = "test@gmail.com";

// let updated={
//     ...formData,
//    [field]:value,
// }
// console.log(formData)
// console.log(updated);

// 7️⃣ Remove Key Dynamically
// const user = {
//   id: 1,
//   name: "Prajjal",
//   role: "Admin",
//   active: true
// };

// const keyToRemove = "role";

// 👉 Remove key dynamically using destructuring + spread.

// const user = {
//   id: 1,
//   name: "Prajjal",
//   role: "Admin",
//   active: true
// };

// const keyToRemove = "role";

// const {[keyToRemove]:removed,...newuser}=user;;
// console.log(newuser)

// 8️⃣ Nested Object Update
// const user = {
//   id: 1,
//   profile: {
//     name: "Prajjal",
//     city: "Jaipur"
//   }
// };

// 👉 Update city to "Kolkata" immutably using spread.

// const user = {
//   id: 1,
//   profile: {
//     name: "Prajjal",
//     city: "Jaipur",
//   },
// };

// let updated={
//     ...user,
//     profile:{...user.profile,city:"Kolkata"}
// }
// console.log(user)
// console.log(updated)

// 9️⃣ Add Item at Beginning of Array
// const messages = ["Hello", "How are you?"];
// const newMessage = "Good Morning";

// 👉 Add new message at the beginning using spread.

// const messages = ["Hello", "How are you?"];
// const newMessage = "Good Morning";

// //---by unshift method--add element at the beginning of array
// // messages.unshift(newMessage);

// //-------------by spread operator--------------
// let updatedMessages = [newMessage, ...messages];

// console.log(messages);
// console.log(updatedMessages);

// 🔟 Combine Two Arrays with Condition
// const freeCourses = ["HTML", "CSS"];
// const premiumCourses = ["React", "Node"];
// const isPremiumUser = true;

// 👉 If premium user, combine both arrays using spread.
//  Else return only freeCourses.

// const freeCourses = ["HTML", "CSS"];
// const premiumCourses = ["React", "Node"];
// const isPremiumUser = true;
// let courses = isPremiumUser ? [...freeCourses, ...premiumCourses] : freeCourses;
// console.log(courses);

// 1️⃣1️⃣ Remove Object Property and Add New One Simultaneously
// const user = {
//   id: 1,
//   username: "prajjal",
//   role: "admin"
// };

// 👉 Remove role and add accessLevel: "super" in one statement.

// const user = {
//   id: 1,
//   username: "prajjal",
//   role: "admin",
// };

// const { role, ...updatedUser } = user;
// let newuser = {
//   ...updatedUser,
//   accessLevel: "super",
// };
// // updatedUser.accessLevel = "super";

// console.log(user);
// console.log(newuser);

// 1️⃣2️⃣ Deep Nested Array Update
// const state = {
//   users: [
//     { id: 1, name: "A" },
//     { id: 2, name: "B" }
//   ]
// };

// const targetId = 2;

// 👉 Update name of user with id 2 to "Prajjal" immutably.

// const state = {
//   location: "Jaipur",
//   users: [
//     { id: 1, name: "A" },
//     { id: 2, name: "B" },
//   ],
// };

// const targetId = 2;

// const updatedUsers = {
//   ...state,
//   users: state.users.map((user) =>
//     user.id === targetId ? { ...user, name: "prajjal" } : user,
//   ),
// };

// console.log(updatedUsers);

// 1️⃣3️⃣ Add Conditional Property Only If Exists
// const product = {
//   id: 1,
//   name: "Phone"
// };

// const discount = 10;

// 👉 Add discount property only if discount > 0 using spread.

// const product = {
//   id: 1,
//   name: "Phone",
// };

// const discount = 10;

// let updatedProduct = {
//   ...product,
//   ...(discount > 0 && { discount }),
// };
// console.log(product);
// console.log(updatedProduct);

// 1️⃣4️⃣ Clone Object and Override Multiple Keys
// const settings = {
//   theme: "dark",
//   language: "en",
//   notifications: true
// };

// 👉 Change theme to "light" and notifications to false using spread.

// const settings = {
//   theme: "dark",
//   language: "en",
//   notifications: true
// };

// let updatedSettings = {
//   ...settings,
//   theme: "light",
//   notifications: false
// };
// console.log(settings);
// console.log(updatedSettings);

// 1️⃣5️⃣ Create Utility Function – Generic Update
// Create function:
// updateField(obj, key, value)

// 👉 It should return updated object using spread and computed key.

// function updateField(obj, key, value) {
//   return {
//     ...obj,
//     [key]: value,
//   };
// }

// const user = {
//   id: 1,
//   name: "Prajjal",
//   role: "admin",
// };
// const updatedUser = updateField(user, "role", "super");
// console.log(user);
// console.log(updatedUser);

// 1️⃣6️⃣ Add Item Only If Not Exists
// const cart = [
//   { id: 1, name: "Laptop" }
// ];

// const newItem = { id: 1, name: "Laptop" };

// 👉 Add only if item id not already present. Use spread.

// const cart = [{ id: 1, name: "Laptop" }];

// const newItem = { id: 1, name: "Laptop" };

// const isItemPresent = cart.every((item) => item.id !== newItem.id);
// const updatedCart = isItemPresent ? [...cart, newItem] : cart;

// console.log(cart);
// console.log(updatedCart);
//-------------------by some method-------------------

// const cart = [
//   { id: 1, name: "Laptop" },
//   { id: 2, name: "Tablet" },
// ];

// const newItem = { id: 1, name: "Laptop" };

// const updatedCart = !cart.some((items) => items.id === newItem.id)
//   ? [...cart, newItem]
//   : cart;

// console.log(updatedCart);
//---------------------------------------------------
// const arr = [
//   { id: 1, name: "iphone" },
//   { id: 2, name: "laptop" },
//   { id: 3, name: "tablet" },
// ];

// const product = { id: 4, name: "Shoorya" };
// const isProduct = arr.some((items) => items.id === product.id);
// newItems = [...arr, !isProduct && product];
// console.log(newItems);
//--------------------------------------------------------
// 1️⃣7️⃣ Remove Item from Array by ID (Immutable)
// const cart = [
//   { id: 1 },
//   { id: 2 },
//   { id: 3 }
// ];

// const idToRemove = 2;

// 👉 Remove immutably.

// const cart = [{ id: 1 }, { id: 2 }, { id: 3 }];

// const idToRemove = 2;

// const updatedCart = cart.filter((item) => item.id !== idToRemove);
// console.log(updatedCart);

// 1️⃣8️⃣ Replace Entire Nested Object
// const state = {
//   user: {
//     name: "Prajjal",
//     age: 32
//   }
// };

// const newUser = {
//   name: "Rahul",
//   age: 28
// };

// 👉 Replace nested user object immutably.

// const state = {
//   user: {
//     name: "Prajjal",
//     age: 32,
//   },
// };

// const newUser = {
//   name: "Rahul",
//   age: 28,
// };

// const updatedState = { ...state.user, ... newUser };
// console.log(updatedState);

// 1️⃣9️⃣ Add Multiple Dynamic Keys
// const base = {
//   id: 1
// };

// const dynamicFields = {
//   role: "Developer",
//   status: "Active"
// };

// 👉 Merge dynamically using spread.

// const base = {
//   id: 1,
// };

// const dynamicFields = {
//   role: "Developer",
//   status: "Active",
// };

// let updated={...base,...dynamicFields};
// console.log(updated)

// 20 Remove Property Deep Inside Object
// const state = {
//   user: {
//     id: 1,
//     profile: {
//       name: "Prajjal",
//       password: "123456"
//     }
//   }
// };

// 👉 Remove password immutably using spread + destructuring.

// const state = {
//   user: {
//     id: 1,/
//     profile: {
//       name: "Prajjal",
//       password: "123456",
//     },
//   },
// };

// let updated = { ...user, ...user.profile,};