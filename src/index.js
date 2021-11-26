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

const drinkReference = drink;
drinkReference.id = 'abcd';

console.log(drink);            // {id: 'abcd', name: 'Lemonade', price: {…}}

// shallow copies
const drink1 = {
    id: 'xhs8Pla',
    name: 'Lemonade',
    price: {
        sale: 99,
        full: 129
    },
};

// shallow copies : 2 variants available Object.assign() or ...drink (spread operator)
// const drinkCloneShallow = Object.assign({}, drink1);   // copies only top level values (either values or references)
const drinkCloneShallow = {...drink1};                    // copies only top level values (either values or references)
drinkCloneShallow.id = 'abcd'
drinkCloneShallow.price.sale = 79;

console.log(drink1);              // {id: 'xhs8Pla', name: 'Lemonade', price: {sale: 79, full: 129}}

// deep copy
const drink2 = {
    id: 'xhs8Pla',
    name: 'Lemonade',
    price: {
        sale: 99,
        full: 129
    },
    myFunction() {}
};

const drinkStringified = JSON.stringify(drink2);
console.log(drinkStringified);                     // {"id":"xhs8Pla","name":"Lemonade","price":{"sale":99,"full":129}}

const drinkClone2 = JSON.parse(drinkStringified);
drinkClone2.id = 'abcd'
drinkClone2.price.sale = 79;

console.log(drinkClone2);                          // {id: 'abcd', name: 'Lemonade', price: {sale: 79, full: 129}} 
console.log(drink2);                               // {id: 'xhs8Pla', name: 'Lemonade', price: {sale: 99, full: 129}, myFunction: ƒ}

