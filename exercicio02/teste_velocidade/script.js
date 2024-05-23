let carro1 = prompt("Modelo do carro 1")
let carro2 = prompt("Modelo do carro 2")

let vcarro1 = parseFloat(prompt(`Velocidade do ${carro1} em KM/h`))
let vcarro2 = parseFloat(prompt(`Velocidade do ${carro2} em KM/h`))


function calcularMaisRapido(){
if(vcarro1 > vcarro2){
    return `${carro1} é mais rápido!`
}else{
    return `${carro2} é mais rápido!`
}

}

const valoresDiv = document.getElementById('valores')
const resultadosDiv = document.getElementById('resultados')

valoresDiv.innerHTML = `
<p>Carro 1: ${carro1} -> ${vcarro1} KM/h</p>
<p>Carro 2: ${carro2} -> ${vcarro2} KM/h</p>
`
resultadosDiv.innerHTML = `
<p>${calcularMaisRapido()} -> ${vcarro1} KM/h</p>
`

