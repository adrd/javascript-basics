import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----

console.log(true, false);

const arg = '';
console.log(Boolean(arg));       // false

const arg1 = 'X';
console.log(Boolean(arg1));      // true

console.log(!!arg1);             // true

console.log(Boolean([]));        // true
console.log(Boolean({}));        // true

console.log(new Boolean(arg1));  // Boolean {true}


