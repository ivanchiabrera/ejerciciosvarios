const calcularPosibilidades = require('./app');

test('Dado 10 escalones se espera: La cantidad de posibilidades es 89', () => {
    expect(calcularPosibilidades(10)).toBe('La cantidad de posibilidades es 89');
});

test('Dado 0 escalones se espera: El número debe ser mayor a 0', () => {
    expect(calcularPosibilidades(0)).toBe('El número debe ser mayor a 0');
});

test('Dado un string se espera: El parametro debe ser un entero', () => {
    expect(calcularPosibilidades('a')).toBe('El parametro debe ser un entero');
});