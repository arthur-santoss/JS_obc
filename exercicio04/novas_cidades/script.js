const nomeTurista = prompt("Nome turista: ")
let cidadeVisitada = prompt("Qual cidade já visitou?")

while (cidadeVisitada != "Não"){
    cidade = prompt("Já visitou alguma outra?");
    
    if(cidade == "Não"){
        break;
    }
    cidadeVisitada += `, ${cidade}`;
}
alert(`Cidades visitadas: ${cidadeVisitada}`)