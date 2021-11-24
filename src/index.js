import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----

// name = parameter
// default parameter value = new to ES2015
function makeCar(name = 'Porsche') {
    // if (!name) {
    //     name = 'Porsche';
    // }

    // or i can do the following
    // name = name || 'Porsche';

    console.log(`Making a car: ${name.toUpperCase()}`);
}

// strings = arguments
makeCar('Porsche');    // PORSCHE
makeCar('Ferrari');    // FERRARI
makeCar();             // PORSCHE
makeCar('');           // PORSCHE only when used with if (!name) or name || 'Porsche' otherwise display ''
makeCar('xxx');        // XXX 