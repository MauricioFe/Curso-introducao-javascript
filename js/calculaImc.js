var titulo = document.querySelector("h1");
titulo.textContent = "Aparecida Nutricionista";


var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValido = validaAltura(altura);

    if (!pesoEhValido) {
        console.log("peso inválido");
        pesoEhValido = false;
        tdImc.textContent = "peso inválido";
        paciente.classList.add("paciente-ivalido")
    }
    if (!alturaEhValido) {
        console.log("altura inválida");
        alturaEhValido = false;
        tdImc.textContent = "altura inválida";
        paciente.classList.add("paciente-ivalido")
    }
    if (alturaEhValido && pesoEhValido) {

        tdImc.textContent = calculaImc(peso, altura);
    }
}

function calculaImc(peso, altura) {
    var imc = 0;

    imc = peso / (altura * altura)
    return imc.toFixed(2);
}

function validaPeso(peso) {
    if (peso > 0 && peso < 1000)
        return true
    else
        return false
}function validaAltura(altura) {
    if (altura > 0 && altura < 3)
        return true
    else
        return false
}