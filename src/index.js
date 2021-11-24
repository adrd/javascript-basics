import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----

// scope 1
const anotherID = '1234abcd';

function makeCarPartID(id) {
    // scope 2
    console.log(id, anotherID);

    // function anotherFunction() {
    //     // scope 3
    //     const someID = 99;
    //     console.log(someID);
    // }
}

makeCarPartID('x8YdsZ12');

function makeCarPartIDNew(id) {
    const theId = `CAR_PART_${id}`;

    return function(name) {
        // console.log(theId);
        return `${theId}_${name.toUpperCase()}`;
    };
}

const carPartId = makeCarPartIDNew('x8YdsZ12');
console.log(carPartId('Left Door'));
console.log(carPartId('Right Door'));
console.log(carPartId('Windscreen'));

const anotherCarPartId = makeCarPartIDNew('7hs9zSaq0');
console.log(anotherCarPartId('Left Door'));
console.log(anotherCarPartId('Right Door'));
console.log(anotherCarPartId('Windscreen'));
