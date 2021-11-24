import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----

// using function declaration
function makeCarPrice(...params){
    const total = params.reduce((prev, next) => prev + next);

    // console.log(`Total ${total} USD`);
    
    return total;
}

const totalPrice = makeCarPrice(11, 22, 33, 44, 55, 66);

console.log(`Total ${totalPrice} USD`);
console.log(`Total ${makeCarPrice(11, 22, 33, 44, 55, 66)} USD`);

// using arrow function
const makeCarPriceArrow = (...params) => {
    const total = params.reduce((prev, next) => prev + next);
    return total;
}

const totalPriceArrow = makeCarPriceArrow(99, 77, 44);
console.log(`Total ${totalPriceArrow} USD`);
console.log(`Total ${makeCarPriceArrow(99, 77, 44)} USD`);

// using arrow function, other variant
const makeCarPriceArrow2 = (...params) => {
    return params.reduce((prev, next) => prev + next);
}

console.log(`Total ${makeCarPriceArrow2(99, 77, 44)} USD`);

// using arrow function, other variant
const makeCarPriceArrow3 = (...params) => params.reduce((prev, next) => prev + next);

console.log(`Total ${makeCarPriceArrow3(99, 77, 44)} USD`);

