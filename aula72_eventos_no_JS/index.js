function register(ev) {
    console.log(ev)
    const sectionElement = ev.currentTarget.parentNode
    const username = sectionElement.children.username.value
    const password = sectionElement.children.password.value
    const passwordConfirmation = sectionElement.children.passwordConfirmation.value

    if (password === passwordConfirmation) {
        alert(`Usuário ${username} registrado!`)
    }else{
        alert(`Senhas não conferem!`)
    }
}


const button = document.getElementById('register-button')

button.addEventListener('click', register)

function removeListenner(){
    button.removeEventListener('click', register)
    alert('Event removido')
}

let contador = 0

button.addEventListener('mouseover', function (ev) {
    contador += 1
    console.log(ev.currentTarget)
    console.log(contador)

    if (contador == 10) {
        alert('compre agora!!')
    }
})