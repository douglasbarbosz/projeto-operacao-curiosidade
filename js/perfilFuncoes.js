function abrirMenuNovoEndereco() {
    let blocoNovoEndereco = document.querySelector('#blocoNovoEndereco')

    if (blocoNovoEndereco.style.display == 'block') {
        blocoNovoEndereco.style.display = 'none'
    } else {
        blocoNovoEndereco.style.display = 'block'
    }
}

function abrirMenuNovoEmail() {
    let blocoNovoEmail = document.querySelector('#blocoNovoEmail')

    if (blocoNovoEmail.style.display == 'block') {
        blocoNovoEmail.style.display = 'none'
    } else {
        blocoNovoEmail.style.display = 'block'
    }
}

function abrirMenuNovaSenha() {
    let blocoNovaSenha = document.querySelector('#blocoNovaSenha')

    if (blocoNovaSenha.style.display == 'block') {
        blocoNovaSenha.style.display = 'none'
    } else {
        blocoNovaSenha.style.display = 'block'
    }
}

let labelNovoEndereco = document.querySelector('#labelNovoEndereco')
let novoEndereco = document.querySelector('#novoEndereco')
let validNovoEndereco = false

function verificarNovoEndereco() {
    novoEndereco.addEventListener('keyup', () => {
        if (novoEndereco.value.length <= 3) {
            labelNovoEndereco.innerHTML = 'Endereço inválido'
            labelNovoEndereco.setAttribute('style', 'color: red')
        } else {
            labelNovoEndereco.innerHTML = 'Endereço válido'
            labelNovoEndereco.setAttribute('style', 'color: green')
            validEndereco = true
        }

        endereco.addEventListener('blur', () => {
            if (novoEndereco.value == '') {
                labelNovoEndereco.innerHTML = 'Endereço'
                labelNovoEndereco.style.color = 'black'
            }
        });
    })
}

let labelNovoEmail = document.querySelector('#labelNovoEmail')
let novoEmail = document.querySelector('#novoEmail')
let validEmail = false

function verificarNovoEmail() {
    novoEmail.addEventListener('keyup', () => {
        if (!isEmailValid(novoEmail.value)) {
            labelNovoEmail.innerHTML = 'E-mail inválido'
            labelNovoEmail.setAttribute('style', 'color: red')
        } else {
            labelNovoEmail.innerHTML = 'E-mail válido'
            labelNovoEmail.setAttribute('style', 'color: green')
            validEmail = true
        }

        novoEmail.addEventListener('blur', () => {
            if (novoEmail.value == '') {
                labelNovoEmail.innerHTML = 'E-mail'
                labelNovoEmail.style.color = 'black'
            }
        });
    })
}

let labelNovaSenha = document.querySelector('#labelNovaSenha')
let novaSenha = document.querySelector('#novaSenha')
let validNovaSenha = false

function verificarNovaSenha() {
    novaSenha.addEventListener('keyup', () => {
        if (!isSenhaValid(novaSenha.value)) {
            labelNovaSenha.innerHTML = 'Senha inválida'
            labelNovaSenha.setAttribute('style', 'color: red')
        } else {
            labelNovaSenha.innerHTML = 'Senha válida'
            labelNovaSenha.setAttribute('style', 'color: green')
            validNovaSenha = true
        }

        novaSenha.addEventListener('blur', () => {
            if (novaSenha.value == '') {
                labelNovaSenha.innerHTML = 'Senha'
                labelNovaSenha.style.color = 'black'
            }
        });
    })
}

verificarNovoEndereco()
verificarNovoEmail()
verificarNovaSenha()