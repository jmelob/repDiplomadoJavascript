const prompt = require('prompt');

prompt.start();

var numeroInput = ['numero'];

prompt.get(numeroInput, function(error,userInput) {

    var numero = parseFloat(userInput.numero);
    var resultado = numero % 2;

    if (resultado == 0) {
        console.log("El número: " + numero + " es par.");
    }
    else {
        console.log("El número: " + numero + " es impar.");
    }  

})