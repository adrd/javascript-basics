import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----

// literal syntax
const drink = {
    id: 'xhs8Pla',
    name: 'Lemonade',
    price: 99
};

console.log(drink);                            // {id: 'xhs8Pla', name: 'Lemonade', price: 99}

const drinkReference = drink;
drinkReference.name = 'Peach';

console.log(drink);                            // {id: 'xhs8Pla', name: 'Peach', price: 99}

console.log(drink === drinkReference);         // right

console.log({} === {});                        // false

// constructor syntax
console.log(new Object());                     // {}
// function syntax
console.log(Object());                         // {}

console.log(new Object() instanceof Object);   // true
console.log(Object() instanceof Object);       // true, internally Object() calls new Object()
console.log({} instanceof Object)              // true