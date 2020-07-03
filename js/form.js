
var boataoAdicionar = document.querySelector("#adicionar-paciente")

boataoAdicionar.addEventListener("click", (event) => {
    event.preventDefault();/*Previne o comportamento padrão*/
    var form = document.querySelector("#form-adiciona");
    var paciente = getValoreDoForm(form);
    var pacienteTr = montarTr(paciente)
    var erros = validaPaciente(paciente);
    console.log(erros)
    if (erros.length > 0) {
        exibeMensagensDeErro(erros);
        return;
    }

    var tabela = document.querySelector("#tabela-pacientes")

    tabela.appendChild(pacienteTr);
    form.reset();
    var mensagemErro = document.querySelector("#mensagens-erro");
    mensagemErro.innerHTML ="";
});

function getValoreDoForm(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}
function montarTr(paciente) {

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr
}
function montaTd(data, classe) {
    var td = document.createElement("td");
    td.textContent = data;
    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente) {
    var erros = [];

    if (paciente.nome.length == 0) {
        erros.push("O nome não pode ser em branco");
    }
    if (!validaPeso(paciente.peso))
        erros.push("Peso é inválido");
    if (!validaAltura(paciente.altura))
        erros.push("Altura é inválido");
    if (paciente.gordura.length == 0) {
        erros.push("A gordura não pode ser em branco")
    }
    if (paciente.altura.length == 0) {
        erros.push("A altura não pode ser em branco")
    }
    if (paciente.peso.length == 0) {
        erros.push("A peso não pode ser em branco")
    }
    return erros;

}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    erros.forEach((erro) => {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li)
    });
}