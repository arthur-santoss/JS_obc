let imoveis = []

let opcao = "";

do {
    opcao = prompt(`
    Bem vindo ao cadastro de imóveis!
    Total de imóveis: ${imoveis.length}
    
    Escolha uma opção: 
    1 - Novo imóvel
    2 - Listar imóveis
    3 - Sair`)

    switch (opcao) {
        case '1':
            const imovel = {}
            imovel.proprietario = prompt('Nome do proprietário')
            imovel.quartos = prompt('Número de quartos')
            imovel.banheiros = prompt('Número de banheiros')
            imovel.garagem = prompt('Possui garagem?')

            const confirmacao = confirm(
                `Salvar este imóvel?
                Proprietário: ${imovel.proprietario}
                Quantidade de quartos: ${imovel.quartos}
                Quantidade de banheiros${imovel.banheiros}
                Possui garagem? ${imovel.garagem}`
            )

            if (confirmacao) {
                imoveis.push(imovel)
                alert("Imóvel salvo com sucesso!")
            }else{
                alert("Voltando ao menu!")
            }
            break

        case '2':
            for (let i = 0; i < imoveis.length; i++) {
                alert(`
                Imóvel: ${i + 1}
                Proprietário: ${imoveis[i].proprietario}
                Quantidade de quartos: ${imoveis[i].quartos}
                Quantidade de banheiros${imoveis[i].banheiros}
                Possui garagem? ${imoveis[i].garagem}
                `)
            }
            break

        case '3':
            break

        default:
            alert('Opção inválida!')
            break;
    }
} while (opcao !== '3');