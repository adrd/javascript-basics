import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = "<h1>JavaScript Basics</h1>";

// ----

// array literal syntax
const drinks = ["Lemonade", "Lime", "Peach"];
const drinksReference = drinks;

console.log(drinks);
console.log(drinks === drinksReference); // true

// array constructor syntax (avoid using it)
console.log(new Array("Lemonade", "Lime", "Peach"));
console.log(Array("Lemonade", "Lime", "Peach")); // under the hood calls new Array()
