import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----

const drink = {
    id: 'xhs8Pla',
    name: 'Lemonade',
};

const price = {
    sale: 99,
    full: 129
}

const mergedDrink = Object.assign({}, drink, price);

console.log(drink, price);            // {id: 'xhs8Pla', name: 'Lemonade'} {sale: 99, full: 129}
console.log(mergedDrink);             // {id: 'xhs8Pla', name: 'Lemonade', sale: 99, full: 129}

const mergedDrink1 = Object.assign({}, drink, { price });
console.log(mergedDrink1);            // {id: 'xhs8Pla', name: 'Lemonade', price: {sale: 99, full: 129}}

const mergedDrink2 = { ...drink, ...{ price }};  // ... = spread operator
console.log(mergedDrink2);            // {id: 'xhs8Pla', name: 'Lemonade', price: {sale: 99, full: 129}}

