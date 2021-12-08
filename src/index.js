import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = "<h1>JavaScript Basics</h1>";

// ----

const items = [
  { id: 1, name: "Super Burger", price: 399, promo: false },
  { id: 2, name: "Jumbo Fries", price: 199, promo: false },
  { id: 3, name: "Big Slurp", price: 299, promo: true },
];

// syntax
// const returnValue = items.some((value, index, array) => {}, thisArg);

// const greaterThanOne = [1, 2, 3].some((x) => x > 1);
// console.log(greaterThanOne); // true

// declarative way

const isInPromo = items.some((item) => item.promo);
console.log(isInPromo); // true

// imperative way

// let isInPromo = false;

// for (let index = 0; index < items.length; index++) {
//   const item = items[index];
//   if (item.promo) {
//     isInPromo = true;
//     break;
//   }
// }
// console.log(isInPromo); // true

const total = isInPromo
  ? 600
  : items.reduce((prev, next) => prev + next.price, 0);
console.log(total); // 600

// console.log(items);
