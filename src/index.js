import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----

const drink = {
    id: 'xhs8Pla',
    name: 'Lemonade',
    price: {
        sale: 99,
        full: 129
    },
};

// this is not reliable
console.log(typeof drink);           // object
console.log(typeof []);              // object
console.log(typeof null)             // object

// this is not reliable
console.log({} instanceof Object);   // true
console.log([] instanceof Object);   // true
console.log(null instanceof Object); // false

// this is reliable
console.log(Object.prototype.toString.call(drink));    // [object Object]
console.log(Object.prototype.toString.call(null));     // [object Null]
console.log(Object.prototype.toString.call([]));       // [object Array]

function getType(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
}

console.log(getType(drink));    // Object
console.log(getType(null));     // Null
console.log(getType([]));       // Array

