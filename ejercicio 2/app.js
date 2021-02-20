let data = require('./data.json');

let moment = require('moment'); // Libreria para el control de las fechas

function retornarProductos(data) {
    let productos = [];
    data.customer.purchases.forEach(purchase => {
        purchase.products.forEach(product => {
            const prod = productos.find(p => p.sku == product.sku);
            if (prod == undefined) {
                productos.push({ sku: product.sku, name: product.name, dates: [purchase.date] })
            } else {
                prod.dates.push(purchase.date);
            }
        });
    });
    return productos;
}

function clasificarProductos(productos) {
    //Verifico los productos que fueron comprados mas de dos veces    
    productosClasificados = productos.filter(producto => {
        return producto.dates.length >= 2;
    });

    //Ordeno las fechas de forma ascendente
    productosClasificados.forEach(producto => {
        producto.dates.sort(function(a, b) {
            return new Date(a).getTime() - new Date(b).getTime();
        });
    });
    return productosClasificados;
}

function analizarFechas(productos) {
    let mensajes = [];
    productos.forEach(producto => {
        var cantidadFechas = producto.dates.length - 1;
        var diferenciaDias = 0;
        //Calculo un promedio de dias entre las fechas de compra
        for (let index = cantidadFechas; index >= 1; index--) {
            let fecha1 = moment(producto.dates[index]);
            let fecha2 = moment(producto.dates[index - 1]);
            diferenciaDias += fecha1.diff(fecha2, 'days');
        }
        diasPromedio = diferenciaDias / cantidadFechas;
        //Le sumo a la ultima fecha de compra, los dias promedio calculados
        var fechaEstimada = moment(producto.dates[cantidadFechas]).add(Math.trunc(diasPromedio), 'days').format('yyyy-MM-D');
        mensajes.push(`El producto ${producto.name} podría ser comprado el día ${fechaEstimada} luego de ${diasPromedio} días de su ultima compra.`);
    });
    return mensajes;
}

function analizar(data) {
    let productos = retornarProductos(data);
    let productosClasificados = clasificarProductos(productos);
    return analizarFechas(productosClasificados);
}


//Ejecución
let mensajes = analizar(data);
mensajes.forEach(mensaje => {
    console.log(mensaje);
});

module.exports = { analizar, retornarProductos };