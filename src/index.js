import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----

const immutableString = 'I shall not change!';
const uppercaseString = immutableString.toUpperCase();

console.log(immutableString, uppercaseString);