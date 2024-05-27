// Ao criarmos uma função com muitos parâmetros,
// uma boa prática é substituí-los por um objeto
function parametrosDoJeitoErrado(nome, telefone, endereco, aniversario, email, senha) {
    // ...
  }
  function parametrosDoJeitoCerto(usuario) {
    for (let key in usuario){
        console.log(`${key}: ${usuario[key]}`)
    }
  }
  // Além de facilitar na chamada da função, a ordem dos parâmetros se torna irrelevante
  parametrosDoJeitoErrado("nome", "telefone", "endereco", "aniversario", "email", "senha")

  const dadosDoUsuario = {
    nome: "Arthur",
    telefone: "39489384934",
    email: "@gmail.com",
    senha: "as9das9d8asd",
    aniversario: "20/04/2002",
    endereco: "Logo ali"
  }
  parametrosDoJeitoCerto(dadosDoUsuario)
