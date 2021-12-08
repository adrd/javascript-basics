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
// const returnValue = items.map((value, index, array), thisArg => {...})

// const mapped = [1, 2, 3, 4, 5].map((x) => x * 2);
// console.log(mapped);

// declarative way
const halfOfFries = items.map((item) => {
  if (item.id === 2) {
    return {
      ...item,
      price: item.price / 2,
    };
  }
  return item;
});

console.log(halfOfFries);
console.log(items);

// imperative way
// const halfOfFriesArray = [];

// for (let index = 0; index < items.length; index++) {
//   const item = items[index];
//   if (item.id === 2) {
//     halfOfFriesArray.push({
//       ...item,
//       price: item.price / 2,
//     });
//   } else {
//     halfOfFriesArray.push(item);
//   }
// }

// console.log(halfOfFriesArray);
// console.log(items);
