import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = "<h1>JavaScript Basics</h1>";

// ----

const drinks = [["Lemonade", 99], ["Lime", 99]];
const newDrinks = [["Peach", 89]];

// const merged = drinks.concat(newDrinks); // concat() is immutable
const merged = [...drinks, ...newDrinks];
console.log(merged);

console.log(drinks);
console.log(newDrinks);

console.log("------------");

const drinksArray = [["Lemonade", 99], ["Lime", 99]];
const newDrinksArray = ["Peach", 89];

const newMerged = [...drinksArray, newDrinksArray];

console.log(newMerged);
console.log(drinksArray);
console.log(newDrinksArray);
