import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----

// literal syntax
console.log('Pizza');                             // Pizza string literal
console.log("Pizza");                             // Pizza string literal

console.log("Pizza 'Hello!'");                    // Pizza 'Hello!'
console.log('Pizza \'Hello!\'');                  // Pizza 'Hello!'
console.log('Pizza "Hello!"');                    // Pizza "Hello!"

const pizza = 'Pepperoni';
console.log('Pizza is: ' + pizza + '!');          // Pizza is: Pepperoni!
console.log(`Pizza is: ${pizza}!`);               // Pizza is: Pepperoni!, new syntax from ES2015
console.log(`
Pizza is: 
${pizza}!
`);

// function syntax
console.log(String(55 + 11), String(55 + '11'));  // 66 5511
console.log(String({ name: 'Pepperoni'}));        // [object Object]
console.log(String([1, 2, 3, 4]));                // 1,2,3,4
console.log(String([1, 2, 3, 4]).toString());     // 1,2,3,4

// constructor syntax, creates a wrapper Object
// avoid using it
console.log(new String(55));                      // String {'55'}