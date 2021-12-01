import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = "<h1>JavaScript Basics</h1>";

// ----

console.log(typeof []); // object

console.log([] instanceof Array);          // true
console.log(new Array() instanceof Array); // true

console.log(Array.isArray([1, 2, 3, 4]));        // true, this is the best way to detect whether something is of type array
console.log(Object.prototype.toString.call([])); // [object Array], this is also a best way to detect whether something is of type array

console.log(Array.isArray({})); // false
