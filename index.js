// o primeiro nome
// o sobrenome
// o campo de estudo
// o ano de nascimento

const nome = window.prompt("Primeiro nome")
const sobrenome = window.prompt("Sobrenome")
const campEstudo = window.prompt("Campo de estudo")
const nascimento = window.prompt("Ano de nascimento")

const hoje = new Date();
const ano = hoje.getFullYear();

console.log("nome: " + nome)
console.log("Sobrenome: " + sobrenome)
console.log("Campo de estudo: " + campEstudo)
console.log("Idade: " + (ano - nascimento))