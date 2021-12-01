import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = "<h1>JavaScript Basics</h1>";

// ----

const drinks = [["Lemonade", 99], ["Lime", 99], ["Peach", 89]];

const drinkOne = drinks[0];
const drinkTwo = drinks[1];
const drinkThree = drinks[2];

console.log(drinkOne);   // ["Lemonade", 99]
console.log(drinkTwo);   // ["Lime", 99]
console.log(drinkThree); // ["Peach", 89]

console.log(`Drink: ${drinkOne[0]}, Price: ${drinkOne[1]}`);   // Drink: Lemonade, Price: 99
console.log(`Drink: ${drinks[0][0]}, Price: ${drinks[0][1]}`); // Drink: Lemonade, Price: 99

console.log(drinks);     // (3) [Array(2), Array(2), Array(2)]
