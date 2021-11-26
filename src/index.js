import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----

// 'use strict'

const firstCar = { id: 'x8KszK0' };
const secondCar = { id: 'bc90slqa' };
const thirdCar = { id: 'h9sNsa' };

function carPartId(){
    console.log(this);
}

carPartId();                  // undefined, because of using use strict by default by webpack, i can uncomment the code from index.html to see the result
carPartId.call(firstCar);     // { "id": "x8KszK0" }, attach carPartId() to firstCar object and executes it, then detach it
carPartId();                  // undefined, there is no default object attached to function hence this is undefined
carPartId.call(secondCar);    // { "id": "bc90slqa"}, attach carPartId() to secondCar object and executes it, then detach it
carPartId();                  // undefined, there is no default object attached to function hence this is undefined

carPartId.apply(secondCar);   // apply() does the same thing as call(), but call() is the recommended way to do things instead of apply(), 
                              // if i want to choose between them

function carPartIdNew(name, quantity){
    console.log(`${this.id}_${name}_${quantity}`);
}

const boundThirdCar = carPartIdNew.bind(thirdCar);  // returns a brand new function with the "this" set to thirdCar, this is the lazy approach
// console.log(boundThirdCar); 
boundThirdCar('Windscreen', 99);                    // h9sNsa_Windscreen_99
boundThirdCar('Exhaust', 9);                        // h9sNsa_Exhaust_9

// call = begins with c = commas
carPartIdNew.call(firstCar, 'Left Door', 12);       // x8KszK0_Left Door_12
// apply = begins with a = array
carPartIdNew.apply(secondCar, ['Right Door', 21]);  // bc90slqa_Right Door_21