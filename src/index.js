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
// const returnValue = items.find((value, index, array) => {...}, thisArg);

// const found = ["a", "b", "c", "d"].find((x) => x === "a");
// console.log(found);

// declarative way

const found = items.find((item) => item.id === 2);

// imperative way

// let found; // undefined

// for (let index = 0; index < items.length; index++) {
//   const item = items[index];
//   if (item.id === 2) {
//     found = item;
//     break;
//   }
// }

if (found) {
  console.log(`${found.name} ${(found.price / 100).toFixed(2)}`);
}

// console.log(items);
