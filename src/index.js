import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = "<h1>JavaScript Basics</h1>";

// ----

const items = [
  { id: 1, name: "Super Burger", price: 399, stock: true },
  { id: 2, name: "Jumbo Fries", price: 199, stock: true },
  { id: 3, name: "Big Slurp", price: 299, stock: false },
];

// syntax
// const returnValue = items.every((value, index, array) => {...}, thisArg);

// const isEveryValueTrue = [true, true, true].every(Boolean);
// const isEveryValueTrue = [true, true, true].every((value) => Boolean(value));
// console.log(isEveryValueTrue); // true

// declarative way

const isInStock = items.every((item) => item.stock);

// imperative way

// let isInStock = true;

// for (let index = 0; index < items.length; index++) {
//   const item = items[index];
//   if (!item.stock) {
//     isInStock = false;
//     break;
//   }
// }

if (!isInStock) {
  console.log(
    `Sorry, ${items.find((item) => !item.stock).name} is out of stock`
  );
}

// console.log(items);
