// Teste 1: Verifica se o formulário existe no DOM
const form = document.querySelector("form");
console.assert(form !== null, "✅ Teste 1 passou: Formulário encontrado com sucesso!");

// Teste 2: Verifica se o documento HTML está carregado
console.assert(document.readyState === "complete" || document.readyState === "interactive", "✅ Teste 2 passou: Documento carregado com sucesso!");
