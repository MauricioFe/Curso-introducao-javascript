
var tabela = document.querySelector("table");

paciente.addEventListener("dblclick", (event) => {
    event.target.parentNode.classList.add("fadeOut")
    setTimeout(() => {
        event.target.parentNode.remove();
    },500)


});