import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----

// new to ES2015
const id = 'xhs8Pla';
const name = 'Lemonade';
const price = 99;

const someKey = 'name';

const drink = {
    id,
    [someKey]: name,
    price,
    getDrinkDetails() {                               
        return `Drink ${this.name} (${this.price})`;
    }
};

console.log(drink); // {id: 'xhs8Pla', name: 'Lemonade', price: 99, getDrinkDetails: ƒ}