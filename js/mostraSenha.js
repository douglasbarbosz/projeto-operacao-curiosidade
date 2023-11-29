let inputSenhaLogin = document.querySelector('#senhaLogin')
let inputSenhaCadastro = document.querySelector('#senhaCadastro')

function mostrarSenhaLogin() {
    if (inputSenhaLogin.getAttribute('type') == 'password') {
        inputSenhaLogin.setAttribute('type', 'text')
    } else {
        inputSenhaLogin.setAttribute('type', 'password')
    }
}

function mostrarSenhaCadastro() {
    if (inputSenhaCadastro.getAttribute('type') == 'password') {
        inputSenhaCadastro.setAttribute('type', 'text')
    } else {
        inputSenhaCadastro.setAttribute('type', 'password')
    }
}


let iconeSenhaCad = document.querySelector('#iconeSenha')
let iconeConfirmSenhaCad = document.querySelector('#iconeConfirmSenha')

function mostrarSenha() {
    let inputSenha = document.querySelector('#senhaCad')

    if (inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
}

function mostrarConfirmarSenha() {
    let inputConfirmSenha = document.querySelector('#confirmarSenha')

    if (inputConfirmSenha.getAttribute('type') == 'password') {
        inputConfirmSenha.setAttribute('type', 'text')
    } else {
        inputConfirmSenha.setAttribute('type', 'password')
    }
}