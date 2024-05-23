let medida = parseFloat(prompt("Qual o tamanho em Metros?"))

let option = prompt(`
Para qual medida transformar?
1 - milímetro (mm)
2 - centímetro (cm)
3 - decímetro (dm)
4 - decâmetro (dam)
5 - hectômetro (hm)
6 - quilômetro (km)
`)

let medidaConvertida = 0

switch (parseInt(option)) {
    case 1:
        medidaConvertida = medida * 1000
        alert(`${medida}m -> ${medidaConvertida}mm`)
        break;
    case 2:
        medidaConvertida = medida * 100
        alert(`${medida}m -> ${medidaConvertida}cm`)
        break;
    case 3:
        medidaConvertida = medida * 10
        alert(`${medida}m -> ${medidaConvertida}dm`)
        break;
    case 4:
        medidaConvertida = medida / 10
        alert(`${medida}m -> ${medidaConvertida}dam`)
        break;
    case 5:
        medidaConvertida = medida / 100
        alert(`${medida}m -> ${medidaConvertida}hm`)
        break;
    case 6:
        medidaConvertida = medida / 1000
        alert(`${medida}m -> ${medidaConvertida}km`)
        break;
    default:
        alert("Opção inválida. Por favor, escolha uma opção válida de 1 a 6.")
        break;
}
