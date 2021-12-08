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
// const reducedValue = items.reduce((prev, next, index, array) => {}, 0);

// const reduced = [1, 2, 3, 4, 5].reduce((prev, next) => {
//   console.log(prev, next);
//   return prev + next;
// }, 10); // 25
// console.log(reduced);

// declarative way

// array of numbers
// const reduced1 = items
//   .map((item) => item.price)
//   .reduce((prev, next) => prev + next);
// console.log(reduced1); // 897

// array of objects
const reduced2 = items.reduce((prev, next) => prev + next.price, 0); // 897
console.log(reduced2);

// imperative way

// let reducedValue;
// let prev = 0;

// for (let index = 0; index < items.length; index++) {
//   const next = items[index];
//   prev = prev + next.price;
// }

// reducedValue = prev;
// console.log(reducedValue); // 897

// console.log(items);
