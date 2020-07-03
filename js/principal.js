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

    var pesoEhValido = true;
    var alturaEhValido = true;

    if (peso <= 0 || peso >= 1000) {
        console.log("peso inválido");
        pesoEhValido = false;
        tdImc.textContent = "peso inválido";
        paciente.classList.add("paciente-ivalido")
    }
    if (altura <= 0 || altura >= 2.5) {
        console.log("altura inválida");
        alturaEhValido = false;
        tdImc.textContent = "altura inválida";
        paciente.classList.add("paciente-ivalido")
    }
    if (alturaEhValido && pesoEhValido) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}


var boataoAdicionar = document.querySelector("#adicionar-paciente")

boataoAdicionar.addEventListener("click", (event) => {
    event.preventDefault();/*Previne o comportamento padrão*/
    var form = document.querySelector("#form-adiciona")
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;
    if (nome != "" && peso != "" && altura != "" && gordura != "") {


        var pacienteTr = document.createElement("tr");
        var nomeTd = document.createElement("td");
        var pesoTd = document.createElement("td");
        var alturaTd = document.createElement("td");
        var gorduraTd = document.createElement("td");
        var imcTd = document.createElement("td");
        nomeTd.textContent = nome;
        pesoTd.textContent = peso;
        alturaTd.textContent = altura;
        gorduraTd.textContent = gordura;
        var calculoImc = peso /(altura*altura);
        imcTd.textContent =  calculoImc.toFixed(2);

        pacienteTr.appendChild(nomeTd);
        pacienteTr.appendChild(pesoTd);
        pacienteTr.appendChild(alturaTd);
        pacienteTr.appendChild(gorduraTd);
        pacienteTr.appendChild(imcTd);
        var tabela = document.querySelector("#tabela-pacientes")
        tabela.appendChild(pacienteTr);
    } else {
        alert("Todos os campos são obrigatórios");
    }
});