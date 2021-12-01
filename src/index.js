import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = "<h1>JavaScript Basics</h1>";

// ----

const drinks = ["Lemonade", "Lime", "Peach"];

// beginning
const removed = drinks.shift(); // mutable

console.log(removed); // Lemonade
console.log(drinks);  // ['Lime', 'Peach']

console.log("------------");

// end
const removedFromEnd = drinks.pop(); // mutable

console.log(removedFromEnd); // Peach
console.log(drinks);         // ['Lime']

console.log("------------");

const drinksNew = ["Lemonade", "Lime", "Peach"];

// slice = remove item(s) anywhere
const index = drinksNew.length - 1;
const newDrinks = [...drinksNew.slice(0, index), ...drinksNew.slice(index + 1)]; // slice is immutable

console.log(newDrinks); // ['Lemonade', 'Lime']
console.log(drinksNew); // ['Lemonade', 'Lime', 'Peach']