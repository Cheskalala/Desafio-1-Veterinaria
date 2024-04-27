const fs = require('fs');
const citasFile = './citas.json';


function registrar(nombre, edad, animal, color, enfermedad) {
    // Cargar citas existentes
    let citas = [];
    try {
        citas = JSON.parse(fs.readFileSync(citasFile));
    } catch (error) {
        citas = [];
    }


    const nuevaCita = {
        nombre: nombre,
        edad: edad,
        animal: animal,
        color: color,
        enfermedad: enfermedad
    };

    citas.push(nuevaCita);


    fs.writeFileSync(citasFile, JSON.stringify(citas, null, 2));

    console.log('Cita registrada correctamente.');
}


function leer() {
    
    let citas = [];
    try {
        citas = JSON.parse(fs.readFileSync(citasFile));
    } catch (error) {
        citas = [];
    }


    citas.forEach((cita, index) => {
        console.log(`Cita ${index + 1}:`);
        console.log(`Nombre del animal: ${cita.nombre}`);
        console.log(`Edad: ${cita.edad}`);
        console.log(`Tipo de animal: ${cita.animal}`);
        console.log(`Color del animal: ${cita.color}`);
        console.log(`Enfermedad: ${cita.enfermedad}`);
        console.log('-------------------');
    });

    if (citas.length === 0) {
        console.log('No hay citas registradas.');
    }
}

module.exports = { registrar, leer };
