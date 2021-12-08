import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = "<h1>JavaScript Basics</h1>";

// ----

const drinks = ["Pepsi", "Lemonade", "Cola"];
let count = 0;

for (let index = 0; index < drinks.length; index++) {
  const drink = drinks[index];
  if (drink === "Lemonade") {
    console.log("Pour me a glass!");
    continue; // count = 2
    // break; // count = 1
  }
  count++;
}

console.log(count); // count = 3, without break statement and continue statement
