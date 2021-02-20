//Voy a contemplar estos test teniendo en cuenta que la data en el json no cambiara.
let data = require('./data.json');
const { analizar, retornarProductos } = require('./app');

const expected1 = [
    'El producto Cat Chow 1KG podría ser comprado el día 2020-03-31 luego de 30 días de su ultima compra.',
    'El producto Tidy Cats 2KG podría ser comprado el día 2020-04-30 luego de 60 días de su ultima compra.'
];
const expected2 = [{
        sku: '101',
        name: 'Cat Chow 1KG',
        dates: ['2020-01-01', '2020-02-01', '2020-03-01']
    },
    {
        sku: '102',
        name: 'Tidy Cats 2KG',
        dates: ['2020-01-01', '2020-03-01']
    },
    {
        sku: '103',
        name: 'Royal canin cat ultra light pouch',
        dates: ['2020-01-15']
    }
]

test('Dado una lista de compras se espera que retorne dos productos con su fecha estimada de compra', () => {
    expect(analizar(data)).toEqual(expect.arrayContaining(expected1));
});

test('Dado una lista de compras se espera que retorne productos agrupados por fechas de compra', () => {
    expect(retornarProductos(data)).toEqual(expect.arrayContaining(expected2));
});