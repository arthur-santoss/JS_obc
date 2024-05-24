let numero = parseFloat(prompt("Digite o numero para calcular"))

let numeros = ""

for (let index = 1; index <= 20; index++) {
    console.log(`${numero} x ${index} = ${numero*index}`)
    numeros += `${index *numero}\n`
}

alert(numeros)
