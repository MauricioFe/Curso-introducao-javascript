var botaoBuscar = document.querySelector("#buscar-paciente");

botaoBuscar.addEventListener("click", function () {
    console.log("...bucando");

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");
    var erro = document.querySelector("#erro-ajax");
    xhr.addEventListener("load", function () {
        if(xhr.status == 200){
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
            erro.classList.add("#erro-ajax")
            pacientes.forEach(function (paciente) {
                adicionaPacienteNaTabela(paciente)
            });
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            erro.classList.remove("invisivel")
        }
       
    });

    xhr.send();

});