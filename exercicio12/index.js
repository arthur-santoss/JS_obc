function addStack() {
    const ul = document.getElementById('inputs');
    const newLi = document.createElement('li');

    const newLabel = document.createElement('label');
    newLabel.innerText = 'Tecnologia: ';

    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.name = 'input';

    const newRadio = document.createElement('input');
    newRadio.type = 'radio';



    
    
    



    newLi.appendChild(newLabel);
    newLi.appendChild(newInput);
    newLi.appendChild(newRadio);
    ul.appendChild(newLi);
}
