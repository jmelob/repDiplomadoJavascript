const prompt = require('prompt');

prompt.start();

let notaInput = ['nota'];

prompt.get(notaInput, function(error,userInput) {

    let nota = userInput.nota;

    if (nota < 3) {
        console.log("Muy deficiente.")
    }
    else if(nota >= 3 && nota < 5) {
        console.log("Insuficiente")
    }  
    else if(nota >= 5 && nota < 6) {
        console.log("Suficiente")
    }  
    else if(nota >= 6 && nota < 7) {
        console.log("Bien")
    }  
    else if(nota >= 7 && nota < 9) {
        console.log("Notable")
    }  
    else if(nota >= 9 && nota <= 10) {
        console.log("Sobresaliente")
    }  
    else {
        console.log("No definido")
    }
})