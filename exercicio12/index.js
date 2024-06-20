function createLabel(text, htmlFor) {
    const label = document.createElement('label')
    label.htmlFor = htmlFor
    label.innerHTML = text
    return label
}

function createInput(id, name, value = '', type = 'text', placeholder = '') {
    const input = document.createElement('input')
    input.id = id
    input.name = name
    input.value = value
    input.type = type
    input.placeholder = placeholder

    return input
}

const addTecBtn = document.getElementById('addTecBtn')
const stackInputs = document.getElementById('stackInputs')
const developers = []
let inputRows = 0

addTecBtn.addEventListener('click', function(ev) {
    const newRow = document.createElement('li')
    const rowIndex = inputRows
    inputRows++
    newRow.id = 'inputRow_' + rowIndex
    newRow.className = 'inputRow'

    const tecNameLabel = createLabel('Nome: ', 'tecName_' + rowIndex)
    const tecNameInput = createInput('tecName_' + rowIndex, 'tecName_' + rowIndex)

    newRow.append(
        tecNameLabel, tecNameInput
    )

    stackInputs.appendChild(newRow)
})
