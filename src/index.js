import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----

console.log(typeof 'Pepperoni');                           // string
console.log('Pepperoni' instanceof String);                // false
console.log(new String('Pepperoni') instanceof String);    // true
console.log(String('Pepperoni') instanceof String);        // false
console.log(Object.prototype.toString.call('Pepperoni'));  // [object String], , this is the safe way to detect if something is of a particular type
