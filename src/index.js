import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----

console.log(new String(5599));
console.log(new String(5599).length);
console.log(new String(5599), 'Pepperoni'.length);

console.log('Pepperoni'[0]);       // P
console.log('Pepperoni'['0']);     // P
console.log('Pepperoni'[1]);       // e

const pizza = 'P e p p e r o n i';
console.log(pizza[0], pizza[pizza.length - 1], pizza.length);  // P i 17