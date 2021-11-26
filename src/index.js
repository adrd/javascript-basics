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

// drink.brand = 'My Drinks Co.';
// drink.name = 'Peach';

function propUpdate(prop, value) {
    drink[prop] = value;
}

propUpdate('brand', 'My Drinks Co.');
propUpdate('name', 'Peach');

console.log(drink);    // {id: 'xhs8Pla', name: 'Peach', price: {…}, brand: 'My Drinks Co.'}