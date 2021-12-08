import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = "<h1>JavaScript Basics</h1>";

// ----

const drinks = ["Pepsi", "Lemonade", "Cola"];

for (let index = 0; index < drinks.length; index++) {
  const drink = drinks[index];
  if (drink === "Lemonade") {
    console.log("Pour me a glass!");
  }
  // console.log(drinks[index]);
}
