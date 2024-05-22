const valor1 = parseFloat(window.prompt("Primeiro valor"));
const valor2 = parseFloat(window.prompt("Segundo valor"));

const soma = valor1 + valor2;
const subt = valor1 - valor2;
const mult = valor1 * valor2;
const div = valor1 / valor2;

const valoresDiv = document.getElementById('valores');
const resultadosDiv = document.getElementById('resultados');

valoresDiv.innerHTML = `
    <p>Valor 1: ${valor1}</p>
    <p>Valor 2: ${valor2}</p>
`;

resultadosDiv.innerHTML = `
    <p>Soma: ${soma}</p>
    <p>Subtração: ${subt}</p>
    <p>Multiplicação: ${mult}</p>
    <p>Divisão: ${div}</p>
`;

