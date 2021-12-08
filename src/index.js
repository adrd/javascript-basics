import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = "<h1>JavaScript Basics</h1>";

// ----

const items = [
  { id: 1, name: "Super Burger", price: 399 },
  { id: 2, name: "Jumbo Fries", price: 199 },
  { id: 3, name: "Big Slurp", price: 299 },
];

// syntax
// const returnValue = items.filter((value, index, array), thisArg => {...});

// const filtered = [true, true, false].filter(Boolean);
// const filtered = [true, true, false].filter((value) => Boolean(value));
// console.log(filtered);

// declarative way
const expensiveItems = items.filter((item) => item.price > 199);
console.log(expensiveItems);
console.log(items);

// imperarative way
// const expensiveItemsArray = [];

// for (let index = 0; index < items.length; index++) {
//   const item = items[index];
//   if (item.price > 199) {
//     expensiveItemsArray.push(item);
//   }
// }

// console.log(expensiveItemsArray);
// console.log(items);
