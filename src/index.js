import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----

const result = Number('55px');

// isNan() checks "NaN" inside
console.log(window.isNaN(result));             // true
console.log(window.isNaN('I am a string!'));   // true

console.log(Number.isNaN(result));             // true
console.log(Number.isNaN('I am a string!'));   // false

console.log(Number.isInteger(66));             // true
console.log(Number.isInteger(66.99));          // false

console.log(Number.NaN);                       // NaN
console.log(Number.isNaN(Number.NaN));         // true