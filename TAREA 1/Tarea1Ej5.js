
const prompt = require('prompt');
const descuento10 = 10;
const descuento15 = 15;
const precioProducto = 1000;
const articulo = "SmartPhone"

prompt.start();

var cantidadInput = ['cantidad'];

prompt.get(cantidadInput, function(error,userInput) {

    var cantidadComprada = parseFloat(userInput.cantidad);
    var subTotal;
    var total;
    var cantidadGratis = 0;
    var descuento;

    if (cantidadComprada > 36) {
        cantidadGratis = parseInt((cantidadComprada - 36) / 12);
        subTotal = cantidadComprada * precioProducto;
        descuento = subTotal * (descuento15 / 100);
        total = subTotal - descuento;
    }
    else {
        subTotal = cantidadComprada * precioProducto;
        descuento = subTotal * (descuento10 / 100);
        total = subTotal - descuento;
    }  
    console.log("ARTICULO: " + articulo + " | CANTIDAD: " + cantidadComprada + " | SUB-TOTAL: " + subTotal + " | DESCUENTO: " + descuento + " | TOTAL A PAGAR: " + total + " | UNIDADES GRATIS: " + cantidadGratis);
})