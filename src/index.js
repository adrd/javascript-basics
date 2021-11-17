import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----

console.log(Number.prototype);
console.log(99.12345678);

console.log((99.12345678).toFixed());               // 99, String number
console.log((99.12345678).toFixed(2));              // 99.12, String number
console.log((99.12345678).toFixed(4));              // 99.1235, String number
console.log(99..toFixed(4));                        // 99.0000, String number
console.log((99).toFixed(4));                       // 99.0000, String number
console.log(parseFloat((99.12345678).toFixed(4)));  // 99.1235, Number number

console.log((99.12345678).toPrecision(2));          // 99, String number
console.log((99.12345678).toPrecision(4));          // 99.12, String number
console.log((99.12345678).toPrecision(5));          // 99.123, String number

console.log(new Number(99).valueOf());              // 99