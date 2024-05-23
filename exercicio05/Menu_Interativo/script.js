let saldo = parseFloat(prompt("Quanto de dinheiro tem disponível?"))
let opcao;

do {    
    opcao = parseInt(prompt(`
    Saldo disponível: ${saldo}
    1 - Sacar
    2 - Depositar
    3 - Sair
    `));
    
    switch (opcao) {
        case 1:
            let saque = parseFloat(prompt("Quanto sacar?"));
            saldo -= saque;
            alert(`Saque: ${saque}\nSaldo disponível: ${saldo}`)
            break;
        case 2:
            let deposito = parseFloat(prompt("Quanto depositar?"));
            saldo += deposito;
            alert(`Deposito: ${deposito}\nSaldo disponível: ${saldo}`)
            break;
        default:
            break;
    }

} while (opcao !== 3);

alert("Programa encerrado");
