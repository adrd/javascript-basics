import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----

console.log(String.prototype);

console.log('Pepperoni'.indexOf('P'));   // 0
console.log('Pepperoni'.indexOf('z'));   // -1

// if ('Pepperoni'.indexOf('P') !== -1) {

// }

console.log('Pepperoni'.includes('P'));                             // true, new in ES2015

console.log('Pepperoni'.replace('oni', 'fire'));                    // Pepperfire
console.log('Pepperoni'.replace(/oni$/, 'fire'));                   // Pepperfire, using Regular Expressions

console.log('Pepperoni'.slice(2, -1));                              // pperon
console.log('Pepperoni'.slice(0, -1));                              // Pepperon
console.log('Pepperoni'.slice(0, -2));                              // Peppero
console.log('Pepperoni'.slice(0, -3));                              // Pepper
console.log('Pepperoni'.slice(0, 1));                               // P
console.log('Pepperoni'.slice(0, 'Pepperoni'.length));              // Pepperoni

console.log('Pepperoni~Plain'.split('~'));                          // (2) ['Pepperoni', 'Plain']
console.log('Pepperoni~Plain'.split('~')[0]);                       // Pepperoni
console.log('Pepperoni~Plain'.split(/~/)[0]);                       // Pepperoni, using Regular Expressions

console.log('   4444 5555 6666 7777 ');                             //    4444 5555 6666 7777 
console.log('   4444 5555 6666 7777 '.trim());                      // 4444 5555 6666 7777
console.log('   4444 5555 6666 7777 '.length);                      // 23
console.log('   4444 5555 6666 7777 '.trim().length);               // 19
console.log('   4444 5555 6666 7777 '.trim().replace(/\s/g, ''));   // Regular Expression for removing whitespace
