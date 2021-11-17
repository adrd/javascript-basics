import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----

const number = 1;
const result = 'The number is: ' + (number === 1 ? 'One' : 'No-Match');

console.log(result);