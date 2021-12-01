import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = "<h1>JavaScript Basics</h1>";

// ----

const drinks = [["Lemonade", 99], ["Lime", 99], ["Peach", 89]];

// shallow copy

const drinksShallowClone = [...drinks];
// const drinksShallowClone = drinks.slice();
// const drinksShallowClone = Array.from(drinks); // new to ES2015
drinksShallowClone[0][1] = 1000;

console.log(drinksShallowClone); // 1000
console.log(drinks);             // 1000

console.log("----------------");

// deep copy

const drinksDeepClone = JSON.parse(JSON.stringify(drinks));

drinksDeepClone[0][1] = 1500;

console.log(drinksDeepClone); // 1500
console.log(drinks);          // 1000
