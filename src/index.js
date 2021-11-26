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
    }
};

console.log(drink);

const myDrinkId = drink.id;
const myDrinkName = drink.name;
const myDrinkPriceSale = drink.price.sale;
console.log(myDrinkId, myDrinkName, myDrinkPriceSale);  // xhs8Pla Lemonade 99

// const id = 1234;

const { 
    id: myId, 
    price: { full },
    ...rest
} = drink;  // Destructuring, new to ES2015
console.log(myId, full, rest);                   // xhs8Pla Lemonade 129

const { sale, full: fullPrice } = drink.price;
console.log(sale, fullPrice);                    // 99 129

