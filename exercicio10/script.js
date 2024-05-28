let opcao;

let vagas = [];

function criaVaga(nomeVaga, descricao, dataLimite) {
  const vaga = {
    nome: nomeVaga,
    descricao: descricao,
    dtLimite: dataLimite,
    qtdCandidatos: 0
  };

  alert(`Detalhes da vaga:
  Nome: ${vaga.nome}
  Descrição: ${vaga.descricao}
  Data limite: ${vaga.dtLimite}
  `);

  vagas.push(vaga);
  alert('Vaga adicionada!');
}

function listarVagas() {
  let listarVagas = "";
  for (let i = 0; i < vagas.length; i++) {
    listarVagas += `
    ID Vaga: ${i + 1}
    Nome: ${vagas[i].nome}
    Descrição: ${vagas[i].descricao}
    Data Limite: ${vagas[i].dtLimite}
    Quantidade de candidatos: ${vagas[i].qtdCandidatos}\n`;
  }
  alert(listarVagas);
}

function visualizarVaga(idVaga) {
  idVaga -= 1;
  if (idVaga >= 0 && idVaga < vagas.length) {
    alert(`ID Vaga: ${idVaga + 1}
    Nome: ${vagas[idVaga].nome}
    Descrição: ${vagas[idVaga].descricao}
    Data Limite: ${vagas[idVaga].dtLimite}
    Quantidade de candidatos: ${vagas[idVaga].qtdCandidatos}\n`);
  } else {
    alert('ID de vaga inválido.');
  }
}

function inscreverCandidato(idVaga, idCandidato) {
  idVaga -= 1;
  if (idVaga >= 0 && idVaga < vagas.length) {
    vagas[idVaga].qtdCandidatos += 1;
    alert(`Candidato ${idCandidato} inscrito na vaga ${idVaga + 1}`);
  } else {
    alert('ID de vaga inválido.');
  }
}

function excluirVaga(idVaga) {
  idVaga -= 1;
  if (idVaga >= 0 && idVaga < vagas.length) {
    vagas.splice(idVaga, 1);
    alert('Vaga excluída com sucesso!');
  } else {
    alert('ID de vaga inválido.');
  }
}

do {
  opcao = parseInt(prompt(`Opções disponíveis:
1 - Listar vagas disponíveis
2 - Criar uma nova vaga
3 - Visualizar uma vaga
4 - Inscrever um candidato em uma vaga
5 - Excluir uma vaga
6 - Sair
`));

  let idVaga;

  switch (opcao) {
    case 1:
      listarVagas();
      break;
      
    case 2:
      const nomeVaga = prompt('Nome da vaga');
      const descricao = prompt('Descrição da vaga');
      const dataLimite = prompt('Data limite da vaga');
      criaVaga(nomeVaga, descricao, dataLimite);
      break;

    case 3:
      idVaga = parseInt(prompt('Qual o ID da vaga?'));
      visualizarVaga(idVaga);
      break;

    case 4:
      idVaga = parseInt(prompt('ID da vaga'));
      const idCandidato = parseInt(prompt('ID do candidato'));
      inscreverCandidato(idVaga, idCandidato);
      break;

    case 5:
      idVaga = parseInt(prompt('ID da vaga a excluir'));
      excluirVaga(idVaga);
      break;

    case 6:
      alert('Encerrando...');
      break;

    default:
      alert('Valor inválido!');
      break;
  }

} while (opcao != 6);
