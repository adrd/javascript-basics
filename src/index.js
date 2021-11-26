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

// for..in loop
for (const prop in drink) {
    console.log(prop);             // id, name, price
}

for (const prop in drink) {
    console.log(drink[prop]);       // xhs8Pla, Lemonade, {sale: 99, full: 129}
}

for (const prop in drink) {
    const value = drink[prop];
    //if (typeof value !== 'string') {
    if (Object.prototype.toString.call(value) === '[object Object]') {
        for (const key in value) {
            console.log(key);               // sale, full
        }
    }
}

console.log('------------')

const drink1 = {
    name: 'Lemonade',
    price: {
        sale: 99,
        full: 129
    },
};

const drinkWithId = Object.create(drink1);        // creates a new object having as prototype object drink1 object
drinkWithId.id = 'xhs8Pla';
console.log(drinkWithId);

console.log('name' in drinkWithId);               // true

for (const prop in drinkWithId) {
    console.log(prop);                            // id, name, price, here in operator looks up properties from the prototype object
}

for (const prop in drinkWithId) {
    if (drinkWithId.hasOwnProperty(prop)) {       // here we test if the property is indeed on the object itself
        console.log(prop, drinkWithId[prop]);     // id xhs8Pla        
    }
    
}