import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = "<h1>JavaScript Basics</h1>";

// ----

const drinks = ["Pepsi", "Lemonade", "Cola"];

for (let index = 0; index < drinks.length; index++) {
  const drink = drinks[index];
  console.log(drink);
}

// new to ES2015
for (const drink of drinks) {
  console.log(drink);
}

console.log([1, 2, 3]);
