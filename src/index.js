import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = "<h1>JavaScript Basics</h1>";

// ----

const drinks = ["Lemonade", "Lime", "Peach"];

console.log(drinks[0]); // Lemonade

drinks[0] = "Diet Lemonade";
console.log(drinks[0]); // Diet Lemonade

console.log(drinks[drinks.length - 1]); // Peach

// it is good to avoid doing something like this, we are adding a property to array
// drinks["favourite"] = "Cola";
// console.log(drinks);

drinks.length = 0;                   // clear items or elements from array
// drinks.splice(0, drinks.length);  // removes items or elements from array, does the same thing as above

console.log(drinks);
