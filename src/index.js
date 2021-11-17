import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----

console.log(0.1 + 0.2 === 0.3);
console.log(0.1 + 0.2);

console.log(100 / 3);
console.log(33.333333333333336 * 3);

const price = 9.33;
const quantity = 3;
console.log(price * quantity);

const anotherPrice = 9.33 * 100;
const anotherQuantity = 3;
console.log((anotherPrice * anotherQuantity) / 100);