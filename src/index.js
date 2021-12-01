import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = "<h1>JavaScript Basics</h1>";

// ----

const drinks = ["Lemonade", "Lime", "Peach"];

// beginning
drinks.unshift("Water");                     // ['Water', 'Lemonade', 'Lime', 'Peach'], mutable, this function mutates array

const newDrinksArray = ["Pepsi", ...drinks]; // immutable
// newDrinksArray.length = 0;
console.log(newDrinksArray);                 // ['Pepsi', 'Water', 'Lemonade', 'Lime', 'Peach']

console.log("------------------");

// middle
const index = 1;
drinks.splice(index, 0, "Mirinda"); // mutable
console.log(drinks);                // ['Water', 'Mirinda', 'Lemonade', 'Lime', 'Peach']

const newDrinksArrayMiddle = [
  ...drinks.splice(0, index),       // beginning with 0 index remove 1 item (index value), return the item deleted, 'Water'
  "Mojito",
  ...drinks.splice(index - 1),      // from 0 index removes all the items till the end and return all the items removed, 'Mirinda', 'Lemonade', 'Lime', 'Peach'
]; // immutable
console.log(newDrinksArrayMiddle);  // ['Water', 'Mojito', 'Mirinda', 'Lemonade', 'Lime', 'Peach']

console.log(drinks); // [], empty array

console.log("------------------");

// end
drinks.push("Cola"); // mutable, this function mutates array
drinks.push("Beer");

console.log(drinks); // ['Cola', 'Beer']

const newDrinksArrayEnd = [...drinks, "SevenUp"]; // immutable
console.log(newDrinksArrayEnd);                   // ['Cola', 'Beer', 'SevenUp']
