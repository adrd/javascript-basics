import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = "<h1>JavaScript Basics</h1>";

// ----

const drinks = [
  { name: "Lemonade", price: 79 },
  { name: "Peach", price: 99 },
  { name: "Lime", price: 89 },
];

// console.log(drinks);
console.log(drinks.reverse()); // mutable, 'Lime', 'Peach' 'Lemonade'

const drinks1 = [
  { name: "Lemonade", price: 79 },
  { name: "Peach", price: 99 },
  { name: "Lime", price: 89 },
];

console.log(drinks1.sort((a, b) => a.price - b.price));    // mutable, ascending sorting

const drinks2 = [
  { name: "Lemonade", price: 79 },
  { name: "Peach", price: 99 },
  { name: "Lime", price: 89 },
];

console.log(drinks2.sort((a, b) => b.price - a.price));    // mutable, descending sorting
