const vagas = []

function listarVagas() {
  const vagasEmTexto = vagas.reduce(function(textoFinal, vaga, indice) {
    textoFinal += `${indice} .`
    textoFinal += `${vaga.nome}`
    textoFinal += ` (${vaga.candidatos.length} candidatos)\n`
    return textoFinal
  },"")

  alert(vagasEmTexto)
}

function novaVaga() {
  const nome = prompt('nome para vaga')
  const descricao = prompt('informe uma descrição')
  const dataLimite = prompt('informe a data limite (dd/mm/aaaa)')

  const confirmacao = confirm(`Criar vaga com essas informações?\n
  Nome: ${nome}\nDescrição: ${descricao}\nData limite: ${dataLimite}
  `)

  if (confirmacao){
    const novaVaga = {nome, descricao, dataLimite, candidatos: [] }
    vagas.push(novaVaga)
    alert('Vaga criada!')
  }

  function exibirVaga() {
    const indice = parseInt(prompt('Qual o Indice da vaga'))
    const vaga = vagas[indice]
    const candidatosEmTexto = vaga.candidatos.reduce(function(textoFinal, candidato){
      return textoFinal + "\n . " + candidato
    }, "")

    alert('Vaga nº ' + indice +
      "\nNome: " + vaga.nome + 
      "\nDescrição: " + vaga.descricao + 
      "\nData limite: " + vaga.dataLimite + 
      "\nQuantidade de candidatos: " + vaga.candidatatos.length + 
      
    )
  }
}