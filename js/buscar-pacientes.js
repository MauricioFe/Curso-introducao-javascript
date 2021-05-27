var botaoBuscar = document.querySelector("#buscar-paciente");

botaoBuscar.addEventListener("click", () => {
    console.log("...bucando");
    var xhr = new XMLHttpRequest();//serve para realizarmos requisições http
    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes"); 
    //acessar uma api através de uma url e um verbo http
    var erro = document.querySelector("#erro-ajax");
    xhr.addEventListener("load", () => {
        if (xhr.status == 200) {
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
            erro.classList.add("#erro-ajax")
            pacientes.forEach((paciente) => {
                adicionaPacienteNaTabela(paciente)
            });
        } else {
            console.log(xhr.status);
            console.log(xhr.responseText);
            erro.classList.remove("invisivel")
        }
    });
    xhr.send(); //realiza o envio da minha api
});