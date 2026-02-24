// const formData = {

//   username: "",

//   email: "",

//   password: "",

// };

// const field = "email";

// const value = "test@gmail.com";
const e1 = {
  target: {
    field: "email",

    value: "test@gmail.com",
  },
};
const e2 = {
  target: {
    field: "email",

    value: "name@gmail.com",
  },
};
const e3 = {
  target: {
    field: "password",

    value: "1234",
  },
};

// formData.email = value;

// console.log(formData);

// let newData = {

//   ...formData,

//   [field]: value,

// };

// console.log(formData);

// console.log(newData);

// const setData = (prev, e) => {

//   return {

//     ...prev,

//     [e.target.field]: e.target.value,

//   };

// };

// let newobj = setData(formData, e);

// console.log(newobj);

const useState = (state) => {
  return {
    data: state,

    setData: (e) => {
      return {
        ...state,

        [e.target.field]: e.target.value,
      };
    },
  };
};

let { data, setData } = useState({
  username: "prajjal Dhar",

  email: "",

  password: "",
});

console.log(data);

let newdata1 = setData(e1);

console.log(newdata1);

let newdata2 = setData(e2);

console.log(newdata2);

let newdata3 = setData(e3);

console.log(newdata3);
