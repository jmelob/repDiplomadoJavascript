const prompt = require('prompt');
const precioParqueo = 1500;

prompt.start();

var tiempoInput = ['horas','minutos'];

prompt.get(tiempoInput, function(error,userInput) {

    var horas = parseFloat(userInput.horas);
    var minutos = parseFloat(userInput.minutos);
    var valorHoras;
    var valorMinutos;
    
    valorHoras = precioParqueo * horas;
    valorMinutos = precioParqueo * (minutos/60);
    var pago = valorHoras + valorMinutos;

    console.log("Usted debe pagar: " + pago);

})