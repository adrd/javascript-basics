import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = "<h1>JavaScript Basics</h1>";

// ----

const drinks = ["Lemonade", "Lime", "Peach"];

const index = drinks.indexOf("Lime"); // indexOf() is case sensitive

console.log(index); // 1

if (index !== -1) {
  console.log(drinks[index]); // Lime
}

const included = drinks.includes("Peach"); // includes is case sensitive
console.log(included); // true

console.log(drinks);

console.log("-----------");

const drinksWithId = [
  { id: 1, name: "Lemonade" },
  { id: 2, name: "Lime" },
  { id: 3, name: "Peach" },
];

const idIndex = drinksWithId.findIndex((value) => value.name === "Peach");
console.log(idIndex); // 2
console.log(drinksWithId[idIndex]); // {id: 3, name: 'Peach'}

const foundItem = drinksWithId.find((value) => value.name === "Peach");
console.log(foundItem); // {id: 3, name: 'Peach'}
