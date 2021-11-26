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

// slow operation
// delete drink.id;
// console.log(drink);    // {name: 'Lemonade', price: {…}}

// for performance reasons these is the approach you may want to take
drink.id = undefined;

if (drink.id) {
    console.log('HAS id...');
}

// console.log(drink.hasOwnProperty('id'));  // need to be mindfull about using hasOwnProperty() function

const { price, ...rest } = drink;
console.log(price, rest, drink);             // {sale: 99, full: 129} {id: undefined, name: 'Lemonade'} {id: undefined, name: 'Lemonade', price: {…}}

