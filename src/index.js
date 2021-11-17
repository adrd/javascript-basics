import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----

// literal syntax
const literalNumber = 99;
console.log(literalNumber);

// function syntax
// perform a type-conversion in a non-constructor context
console.log(Number(55));          // 55
console.log(Number('33'));        // 33
console.log(Number('44px'));      // NaN

// constructor syntax, creates a wrapper Object
// avoid using it
console.log(Number(66));          // 66
console.log(new Number(66));      // Number {66}
console.log(new Number('44px'));  // Number {NaN}