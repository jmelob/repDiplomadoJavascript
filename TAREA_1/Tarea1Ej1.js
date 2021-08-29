const prompt = require('prompt');

prompt.start();

let edadInput = ['Edad'];

prompt.get(edadInput, function(error,userInput) {

    let edad = userInput.Edad;

    if (edad >= 18) {
        console.log("Puede conducir.")
    }
    else {
        console.log("No puede conducir.")
    }
})