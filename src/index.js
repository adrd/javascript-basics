import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = "<h1>JavaScript Basics</h1>";

// ----

const drinks = [["Lemonade", 99], ["Lime", 99], ["Peach", 89]];

const [drinkOne, [drinkTwoFirstItem, drinkTwoTwoItem], drinkThird] = drinks;

console.log(drinkOne, drinkTwoFirstItem, drinkTwoTwoItem, drinkThird); // ['Lemonade', 99] 'Lime' 99 ['Peach', 89]

const [one, [, b], ...rest] = drinks;

console.log(one, b, rest); // ['Lemonade', 99] 99 [Array(2)] (2) ['Peach', 89]
