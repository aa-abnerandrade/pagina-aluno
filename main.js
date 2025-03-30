document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o envio padrão do formulário
        alert("Perfil salvo com sucesso!");
    });
});