import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----

// hoisting
console.log(makeCar);                  // makeCar function is available, applies toString() to function object/instance and displays the function code
console.log(makeCarExpression);        // undefined
console.log(makeCarExpression1);       // undefined
console.log(makeCarArrow);             // undefined
console.log(makeCarArrowShorthand);    // undefined

// 1: Function Declaration
function makeCar() {
    console.log('Making a car...');
}

console.log(makeCar);    // applies toString() to function object/instance and displays the function code

makeCar();

// 2: Function Expression (anonymous or named)
// const makeCarExpression = function makeCar() {};
const makeCarExpression = function () {};             // this is an example of an anonymous function
console.log(makeCarExpression.name);                  // makeCarExpression, returns const name, which is considered to be function name, 
                                                      
const makeCarExpression1 = function myFunction() {};
console.log(makeCarExpression1.name);                 // myFunction, returns function name 

console.log(makeCar.name);                            // makeCar, returns function name

// 3: Arrow Function (new to ES2015)
const makeCarArrow = () => {
    console.log('Making car inside Arrow...');
};

makeCarArrow();

const makeCarArrowShorthand = () => console.log('Short');

makeCarArrowShorthand();