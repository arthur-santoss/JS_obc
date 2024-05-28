let opcao;

function areaTriangulo(base, altura) {
  alert( (base * altura) / 2)
}

function areaRetangulo(base, altura) {
  alert( base * altura)
}

function areaQuadrado(lado) {
  alert( Math.pow(lado, 2))
}

function areaTrapezio(baseMenor, baseMaior, altura) {
  alert( ((baseMaior + baseMenor) * altura) / 2)
}

function areaCirculo(pi = 3.14, raio) {
  alert( pi * (Math.pow(raio, 2)))
}

do {
  
opcao = parseInt(prompt(`Formas geométricas disponíveis:
1 - Área do triangulo
2 - Área do retângulo
3 - Área do quadrado
4 - Área do trapézio
5 - Área do circulo
6 - Sair
`
))

let base, altura, lado, raio;

switch (opcao) {
  case 1:
    base = prompt('Valor da base')
    altura = prompt('Valor da altura')
    areaTriangulo(base, altura)
    break;

  case 2:
    base = prompt('Valor da base')
    altura = prompt('Valor da altura')
    areaRetangulo(base, altura)
    break;

  case 3:
    lado = prompt('Valor do lado')
    areaQuadrado(lado)
    break;

  case 4:
    baseMenor = prompt('Valor base menor')
    baseMaior = prompt('Valor base maior')
    altura = prompt('Valor altura')
    areaTrapezio(baseMenor, baseMaior, altura)
    break;

  case 5:
    raio = prompt('Valor do raio')
    areaCirculo(pi = 3.14, raio)
    break;

  case 6:
    alert('Encerrando...')

  default:
    alert('Valor inválido!')
    break;
}

} while (opcao!= 6);