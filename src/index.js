import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----

const drink = {
    id: 'xhs8Pla',
    name: 'Lemonade',
    price: 99,
    getDrinkDetails() {                               // new to ES2015
        return `Drink ${this.name} (${this.price})`;
    },
    // getDrinkDetails: () => `Drink ${this.name} (${this.price})`  // arrow function has no 'this' keyword, hence this gives an error, this is undefined
    'abc 123': 'I am the value!',
    100: 'I am a number!',
};

console.log(drink);                    // {id: 'xhs8Pla', name: 'Lemonade', price: 99, getDrinkDetails: ƒ}
console.log(drink.getDrinkDetails());  // Drink Lemonade (99)
console.log(drink['abc 123']);         // I am the value!
console.log(drink[100]);               // I am a number!

console.log(drink.id);                 // xhs8Pla
console.log(drink.name);               // Lemonade
console.log(drink.price);              // 99

const myId = 'id';
console.log(drink[myId]);              // xhs8Pla