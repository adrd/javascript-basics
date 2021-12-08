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
// items.forEach((value, index, array), thisArg => {...})

// ["a", "b", "c", "d"].forEach((item, index) => {
//   console.log(item, index);
// });

// declarative way
items.forEach((item) => {
  app.innerHTML += `
        <li>
            ${item.id} ${item.name} ${(item.price / 100).toFixed(2)}
        </li>
    `; // toFixed() does rounding
});

// imperative way
// for (let index = 0; index < items.length; index++) {
//   const item = items[index];
//   app.innerHTML += `
//         <li>
//             ${item.id} ${item.name} ${(item.price / 100).toFixed(2)}
//         </li>
//     `;
// }
