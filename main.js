function formatarPerfil(dados) {
    return `
        <h3>Perfil Salvo</h3>
        <p><strong>Nome:</strong> ${dados.nome}</p>
        <p><strong>Documento:</strong> ${dados.documento}</p>
        <p><strong>Curso:</strong> ${dados.curso}</p>
        <p><strong>Faculdade:</strong> ${dados.faculdade}</p>
        <p><strong>Idade:</strong> ${dados.idade}</p>
        <p><strong>Email:</strong> ${dados.email}</p>
        <p><strong>Telefone:</strong> ${dados.telefone}</p>
        <p><strong>Bio:</strong> ${dados.bio}</p>
        <p><strong>LinkedIn:</strong> <a href="${dados.linkedin}" target="_blank">${dados.linkedin}</a></p>
    `;
}


form.addEventListener("submit", function (event) {
    event.preventDefault();

    const dados = {
        nome: form.nome.value,
        documento: form.documento.value,
        curso: form.curso.value,
        faculdade: form.faculdade.value,
        idade: form.idade.value,
        email: form.email.value,
        telefone: form.telefone.value,
        bio: form.bio.value,
        linkedin: form.linkedin.value,
    };

    const resultado = document.createElement("div");
    resultado.classList.add("perfil");

    resultado.innerHTML = formatarPerfil(dados);

    form.replaceWith(resultado); // substitui o formulário pelo perfil
});
