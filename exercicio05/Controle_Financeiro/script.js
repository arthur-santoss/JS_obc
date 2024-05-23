let option = 0

while(option != 5){
    option = parseInt(prompt(`
    Escolha a sua opção:
    
    1 - Função 1
    2 - Função 2
    3 - Função 3
    4 - Função 4
    5 - Encerrar
    `))
    
    switch (option) {
        case 1:
            alert("Função 1!")
            break;
        case 2:
            alert("Função 2!")
            break;
        case 3:
            alert("Função 3!")
            break;
        case 4:
            alert("Função 4!")
            break;
        default:
            break;
    }
}

alert("Programa encerrado!")