import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----

console.log('compare values using comparison operators part 1 \n')

console.log(1 == 1);     // true, does coercion
console.log(1 === 1);    // true, does not do coercion

console.log('\ncompare values using comparison operators part 2 \n');

console.log(1 == '1');   // true, does coercion
console.log(1 === '1');  // false, does not do coercion

console.log('\ntruthy values or falsy values part 1 \n');

console.log(Boolean(true));         // true
console.log(Boolean(''));           // false, string with no length evaluates to false
console.log(Boolean('asdsaa'));     // true, string with length evaluates to true

console.log('\ntruthy values or falsy values part 2 \n');

console.log(!true);          // false, ! = bang operator
console.log(!!true);         // true
console.log(Boolean(true));  // true

console.log('\ntruthy values (evaluates to Boolean value true) \n');

console.log(!!{});           // true
console.log(!![]);           // true
console.log(!!new Date());   // true
console.log(!!'0');          // true
console.log(!!42);           // true
console.log(!!-42);          // true
console.log(!!3.14);         // true
console.log(!!-3.14);        // true

console.log('\nfalsy values (evaluates to Boolean value false) \n');

console.log(!!false);       // false
console.log(!!null);        // false
console.log(!!undefined);   // false
console.log(!!0);           // false
console.log(!!NaN);         // false
console.log(!!'');          // false