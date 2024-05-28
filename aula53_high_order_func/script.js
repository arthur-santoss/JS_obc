const lista = ['banana', 'maça', 'melao']

function exibirElemento(elemento, indice, array) {
    console.log(
        elemento, indice, array
    )
}

lista.forEach(exibirElemento)

for (let i = 0; i < lista.length; i++) {
    exibirElemento(
        lista[i], i, lista
    )
    
}