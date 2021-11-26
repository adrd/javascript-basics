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
    // hasOwnProperty() {
    //     return false;
    // }
};

// value exists

if (drink.id) {
    console.log(drink.id);
}

for (const prop in drink) {
    console.log(prop);                  // id, name, price
    console.log(drink[prop]);           // xhs8Pla, Lemonade, {sale: 99, full: 129}

    if (drink[prop] === 'Lemonade') {
        console.log(drink[prop]);       // Lemonade
    }
}

console.log(Object.values(drink));      // ['xhs8Pla', 'Lemonade', {sale: 99, full: 129}]

const hasLemonade = Object.values(drink).includes('Lemonade')
console.log(hasLemonade);               // true

// property exists

console.log(drink.hasOwnProperty('name'));                         // true
console.log(Object.prototype.hasOwnProperty.call(drink, 'name'));  // true, NOTE: this is the safest way to use hasOwnProperty() function
console.log(Object.keys(drink));                                   // ['id', 'name', 'price']
console.log(Object.keys(drink).includes('name'));                  // true