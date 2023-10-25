let visibilityLogin = document.querySelector('.material-icons')

visibilityLogin.addEventListener('click', () => {
    let inputSenha = document.querySelector('#senhaLogin')
    
    if (inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})