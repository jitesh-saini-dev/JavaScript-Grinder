// 6️⃣ Dynamic Key Update (Form Handling)
// const formData = {
//   username: "",
//   email: "",
//   password: ""
// };

// const field = "email";
// const value = "test@gmail.com";

// 👉 Update dynamically using spread and computed property name.

const formData = {
  username: "",
  email: "",
  password: "",
};

const field = "email";
const value = "test@gmail.com";

let updatedFormData = {
  ...formData,
  [field]: value,
};
console.log(formData);
console.log(updatedFormData);
