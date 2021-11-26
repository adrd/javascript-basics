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

console.log(Object.keys(drink));   // keys() function doesn't return properties from the prototype object

Object.keys(drink).forEach(function (prop, index) {
    console.log(prop, index);                                      // id 0, name 1, price 2
});

Object.keys(drink).forEach(function (prop) {
    console.log(drink[prop]);                                      // xhs8Pla, Lemonade, {sale: 99, full: 129}
});

Object.keys(drink).forEach(prop => console.log(drink[prop]));      // xhs8Pla, Lemonade, {sale: 99, full: 129}

console.log('-----------')

console.log(Object.entries(drink));   // [Array(2), Array(2), Array(2)], 0: (2) ['id', 'xhs8Pla'], 1: (2) ['name', 'Lemonade'], (2) ['price', {…}]