import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----

console.log(parseInt('55px', 10));         // 55
console.log(parseInt('55px', 2));          // NaN
console.log(parseInt('0110', 2));          // 6

console.log(parseInt('55.9999px', 10));    // 55
console.log(parseFloat('55.9999px'));      // 55.9999
console.log(parseFloat('55.9999px') * 10); // 559.999

console.log(Number('55e10'));              // 550000000000
console.log(Number('55.9999'));            // 55.9999
console.log(+'99.5555');                   // 99.5555, convert a string number to a number
console.log(9 + +'99.5555');               // 108.5555