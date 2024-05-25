let baralho = [];

let opcao;

do {

  opcao = parseInt(
    prompt(`Cartas no baralho: ${baralho.length}
    \nOpções disponíveis:
  1 - Adicionar uma carta
  2 - Puxar uma carta
  3 - Sair
  `
    )
  );

  switch (opcao) {
    case 1:
      const addCarta =  prompt("Qual carta adicionar?").toUpperCase();
      const adiciona = baralho.unshift(addCarta);
      alert(`Carta: \n${addCarta}  \n-> Adicionada!`);
      break;
    
    case 2:
      
      const puxa = baralho.shift();
      alert(`Carta: \n${puxa} \n-> Puxada!`);
      break;

    default:
      break;
  }
} while (opcao !== 3);
