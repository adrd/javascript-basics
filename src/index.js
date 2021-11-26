import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----

function carPartId(name, fn) {
    const theId = `CAR_PART_ID_x8z0sl`;
    return fn(`${theId}_${name}`);
}

const carPart = carPartId('Left Door', function (id) {
    // console.log('I am the callback fn');
    return `Car Part ID: ${id}`;
})

console.log(carPart);