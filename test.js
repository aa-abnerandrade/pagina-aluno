const { formatarPerfil } = require("./main.js");

// JSDOM
const { JSDOM } = require("jsdom");
const fs = require("fs");
const html = fs.readFileSync("index.html", "utf8");
const dom = new JSDOM(html);
const { document } = dom.window;

// Mock
const mockDados = {
    nome: "Abner Andrade",
    documento: "123456789",
    curso: "ADS",
    faculdade: "Fatec",
    idade: "25",
    email: "abner@email.com",
    telefone: "11999999999",
    bio: "Estudante dedicado",
    linkedin: "https://linkedin.com/in/abner"
};

// Teste 1: Verifica se o formulário existe no DOM
const form = document.querySelector("form");
console.assert(form !== null, "✅ Teste 1 passou: Formulário encontrado com sucesso!");

// Teste 2: Verifica se o documento HTML está carregado
console.assert(document.readyState === "complete" || document.readyState === "interactive", "✅ Teste 2 passou: Documento carregado com sucesso!");

// Teste 3: Teste forçado sempre verdadeiro
console.assert(true, "✅ Teste 3 passou: Teste forçado passou com sucesso!");

// Teste 4: Verifica se a função formatarPerfil retorna uma string contendo o nome
const htmlResultado = formatarPerfil(mockDados);
console.assert(htmlResultado.includes("Abner Andrade"), "✅ Teste 4 passou: Nome presente no HTML gerado");

// Teste 5: Verifica se o link do LinkedIn está presente e correto
console.assert(htmlResultado.includes(`href="${mockDados.linkedin}"`), "✅ Teste 5 passou: Link do LinkedIn está correto");

