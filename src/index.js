import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----

const condition = true;

if (condition) {
    console.log('Yes');
} else {
    console.log('No');
}

const number = 99;
let result; // undefined

if (number === 1) {
    result = 'One';
} else if (number === 99) {
    result = 'Ninety-Nine';
} else if (number === 1000) {
    result = 'One Thousand';
} else {
    result = 'No Match';
}

console.log(result);