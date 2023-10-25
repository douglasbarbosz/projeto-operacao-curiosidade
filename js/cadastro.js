let iconeSenhaCad = document.querySelector('#iconeSenha')

iconeSenhaCad.addEventListener('click', () => {
    let inputSenha = document.querySelector('#senhaCad')

    if (inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})

let iconeConfirmSenhaCad = document.querySelector('#iconeConfirmSenha')

iconeConfirmSenhaCad.addEventListener('click', () => {
    let inputConfirmSenha = document.querySelector('#confirmarSenha')

    if (inputConfirmSenha.getAttribute('type') == 'password') {
        inputConfirmSenha.setAttribute('type', 'text')
    } else {
        inputConfirmSenha.setAttribute('type', 'password')
    }
})