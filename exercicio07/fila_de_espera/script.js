const pacientes = ["Arthur", "Fernanda"];
let opcao;

do {
  let listaPacientes = "Lista de espera";
  for (let i = 0; i < pacientes.length; i++) {
    listaPacientes += `\n${i + 1} ${pacientes[i]}`;
  }

  opcao = parseInt(
    prompt(`${listaPacientes}\n
Operações disponíveis:
1 - Novo paciente
2 - Consultar paciente
3 - Sair`)
  );

  switch (opcao) {
    case 1:
      let pacienteAdd = prompt("Qual o nome do paciente para adicionar?");
      let adiciona = pacientes.push(pacienteAdd);
      alert(`${pacienteAdd} Adicionado!`);
      break;
    case 2:
      let consultar = pacientes.shift();
      alert(`${consultar} Dirigir-se ao consultório!`);
      break;

    default:
      break;
  }
} while (opcao !== 3);
