const operaciones = require('./operaciones');

const args = process.argv.slice(2);
const operacion = args[0];

if (operacion === 'registrar') {
    const [, nombre, edad, animal, color, enfermedad] = args;
    operaciones.registrar(nombre, edad, animal, color, enfermedad);
} else if (operacion === 'leer') {
    operaciones.leer();
} else {
    console.log('Operación no válida. Las operaciones disponibles son: registrar, leer');
}
