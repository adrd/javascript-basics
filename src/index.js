import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----

// old way of doing things, using arguments object
function makeCarPrice() {
    console.log(Array.isArray(arguments));        // false
    console.log(arguments);

    Array.from(arguments).forEach(value => console.log(value));

    const total = Array.from(arguments).reduce((prev, next) => {
        return prev + next;
    })

    console.log(`Total ${total} USD`);
}

makeCarPrice(11, 44, 55, 99, 22);

// new way of doing things, using rest parameters
function makeCarPriceRest(...params){
    console.log(Array.isArray(params));           // true
    
    const total = params.reduce((prev, next) => prev + next);

    console.log(`Total ${total} USD`);
}

makeCarPriceRest(99, 88, 77, 11, 44);