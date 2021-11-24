import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----

// true = literal Boolean
// false = literal Boolean
console.log(typeof true);                          // boolean, gives back literal String representation of Boolean
console.log(typeof false);                         // boolean, gives back literal String representation of Boolean

console.log(true instanceof Boolean);              // false, gives back literal Boolean

console.log(new Boolean('') instanceof Boolean);   // true, gives back literal Boolean
console.log(new Boolean('X') instanceof Boolean);  // false, gives back literal Boolean

console.log(Object.prototype.toString.call(true)); // [object Boolean], this is the safe way to detect if something is of a particular type