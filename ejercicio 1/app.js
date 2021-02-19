let prompt = require('prompt');

function calcularSalto(cantidad) {
    if (cantidad == 1 || cantidad == 0) {
        return 1;
    } else {
        return calcularSalto(cantidad - 2) + calcularSalto(cantidad - 1);
    }
}

function calcularPosibilidades(cantidadEscalones) {
    if (Number.isInteger(cantidadEscalones)) {
        if (cantidadEscalones > 0) {
            return (`La cantidad de posibilidades es ${calcularSalto(cantidadEscalones)}`);
        } else {
            return ('El número debe ser mayor a 0');
        }
    } else {
        return ('El parametro debe ser un entero');
    }
}

async function retornarEscalones() {
    const { escalones } = await prompt.get(['escalones']);
    let cantidadEscalones = Number(escalones);
    return cantidadEscalones
}

async function ejecutar() {
    let cantidadEscalones = await retornarEscalones();
    console.log(calcularPosibilidades(cantidadEscalones));
}

ejecutar();

module.exports = calcularPosibilidades;