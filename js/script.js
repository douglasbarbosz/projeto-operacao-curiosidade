let nome = document.querySelector('#inome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let idade = document.querySelector('#idade')
let labelIdade = document.querySelector('#labelIdade')
let validIdade = false

let email = document.querySelector('#email')
let labelEmail = document.querySelector('#labelEmail')
let validEmail = false

let statusInput = document.querySelector('#status')
let validStatus = false

let endereco = document.querySelector('#endereco')
let labelEndereco = document.querySelector('#labelEndereco')
let validEndereco = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmarSenha = document.querySelector('#confirmarSenha')
let labelConfirmarSenha = document.querySelector('#labelConfirmarSenha')
let validConfirmarSenha = false

let interesses = document.querySelector('#interesses')
let labelInteresses = document.querySelector('#labelInteresses')
let validInteresses = false

let sentimentos = document.querySelector('#sentimentos')
let labelSentimentos = document.querySelector('#labelSentimentos')
let validSentimentos = false

let valores = document.querySelector('#valores')
let labelValores = document.querySelector('#labelValores')
let validValores = false

let caixaErro = document.querySelector('#msgErro')
let caixaSucesso = document.querySelector('#msgSucesso')

nome.addEventListener('keyup', () => {
    if (nome.value.length <= 2) {
        labelNome.innerHTML = 'Nome (Digite no minímo 3 caracteres)'
        labelNome.setAttribute('style', 'color: red')
    } else {
        labelNome.innerHTML = 'Nome'
        labelNome.setAttribute('style', 'color: green')
        validNome = true
    }
})

idade.addEventListener('keyup', () => {
    if (idade.value <= 17) {
        labelIdade.innerHTML = 'Apenas maiores de idade'
        labelIdade.setAttribute('style', 'color: red')
    } else {
        labelIdade.innerHTML = 'Idade'
        labelIdade.setAttribute('style', 'color: green')
        validIdade = true
    }
})

email.addEventListener('keyup', () => {
    if (!isEmailValid(email.value)) {
        labelEmail.innerHTML = 'E-mail inválido'
        labelEmail.setAttribute('style', 'color: red')
    } else {
        labelEmail.innerHTML = 'E-mail válido'
        labelEmail.setAttribute('style', 'color: green')
        validEmail = true
    }
})

endereco.addEventListener('keyup', () => {
    if (endereco.value.length <= 3) {
        labelEndereco.setAttribute('style', 'color: red')
    } else {
        labelEndereco.innerHTML = 'Endereço válido'
        labelEndereco.setAttribute('style', 'color: green')
        validEndereco = true
    }
})

senha.addEventListener('keyup', () => {
    if (!isSenhaValid(senha.value)) {
        labelSenha.innerHTML = 'Senha inválida'
        labelSenha.setAttribute('style', 'color: red')
    } else {
        labelSenha.innerHTML = 'Senha válida'
        labelSenha.setAttribute('style', 'color: green')
        validSenha = true
    }
})

confirmarSenha.addEventListener('keyup', () => {
    if (senha.value != confirmarSenha.value) {
        labelConfirmarSenha.innerHTML = 'Senhas não conferem'
        labelConfirmarSenha.setAttribute('style', 'color: red')
    } else {
        labelConfirmarSenha.innerHTML = 'Senhas iguais'
        labelConfirmarSenha.setAttribute('style', 'color: green')
        validConfirmarSenha = true
    }
})

interesses.addEventListener('keyup', () => {
    if (interesses.value.length <= 5) {
        labelInteresses.setAttribute('style', 'color: red')
    } else {
        labelInteresses.setAttribute('style', 'color: green')
        validInteresses = true
    }
})

sentimentos.addEventListener('keyup', () => {
    if (sentimentos.value.length <= 5) {
        labelSentimentos.setAttribute('style', 'color: red')
    } else {
        labelSentimentos.setAttribute('style', 'color: green')
        validSentimentos = true
    }
})

valores.addEventListener('keyup', () => {
    if (valores.value.length <= 5) {
        labelValores.setAttribute('style', 'color: red')
    } else {
        labelValores.setAttribute('style', 'color: green')
        validValores = true
    }
})

function cadastrar() {
    if (validNome && validIdade && validEmail && validEndereco && validSenha && validConfirmarSenha && validInteresses && validSentimentos && validValores) {
        let usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]')

        usuarios.push({
            nome: nome.value, 
            idade: idade.value,
            email: email.value,
            endereco: endereco.value,
            senha: senha.value,
            interesses: interesses.value,
            sentimentos: sentimentos.value,
            valores: valores.value
        })

        localStorage.setItem('usuarios', JSON.stringify(usuarios))

        setTimeout(() => {
            window.location.href = 'home.html'
        }, 1500)

        caixaSucesso.setAttribute('style', 'display: block')
        caixaSucesso.innerHTML = 'Cadastrando novo usuário...'
        caixaErro.setAttribute('style', 'display: none')
        caixaErro.innerHTML = ''
    } else {
        caixaErro.innerHTML = 'Preencha todos os campos corretamente'
        caixaErro.setAttribute('style', 'display: block')
        caixaSucesso.setAttribute('style', 'display: none')
        caixaSucesso.innerHTML = ''
    }
    
}

function logar() {
    let pegaEmail = document.getElementById('email').value
    let pegaSenha = document.getElementById('senha').value
    let validaLogin = false
    let campoVazio = false

    for (let i in usuarios) {

        if (pegaEmail == '' || pegaSenha == '') {
            campoVazio = true
        }

        if (pegaEmail == usuarios[i].login && pegaSenha == usuarios[i].senha) {
            validaLogin = true
            break
        }
    }

    if (validaLogin) {
        location.href = 'home.html'
    } else {
        if (campoVazio) {
            alert('Preencha todos os campos')
        } else {
            alert('E-mail ou senha inconrreta. Tente novamente.')
        }
    }
}

function abrirMenu() {
    if (itens.style.display == 'block') {
        itens.style.display = 'none'
    } else {
        itens.style.display = 'block'
    }
}

function mudouTamanho() {
    if (window.innerWidth >= 768) {
        itens.style.display = 'block'
        perfil.style.display = 'block'
    } else {
        itens.style.display = 'none'
        perfil.style.display = 'none'
    }
}

function abrirMenuPerfil() {
    if (perfil.style.display == 'block') {
        perfil.style.display = 'none'
        perfil.style.position = 'relative'
        perfil.style.top = '0'
        perfil.style.left = '0'
    } else {
        perfil.style.display = 'block'
    }
}

function listarUsuarios() {
    location.href = 'lista-usuarios.html'
}

function sair() {
    location.href = 'index.html'
}

function abrirHome() {
    location.href = 'home.html'
}

function abrirCadastros() {
    location.href = 'cadastro.html'
}

function abrirRelatorios() {
    location.href = 'relatorios.html'
}

function abrirCadastrar() {
    location.href = 'pagina-cadastro.html'
}

function isEmailValid(email) {
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+[a-zA-z]{2,}$/
    )

    if (emailRegex.test(email)) {
        return true
    }
    
    return false
}

function isSenhaValid(senha) {
    const senhaRegex = new RegExp(
        `^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[\\W_]).{8,}$`
    )

    if (senhaRegex.test(senha)) {
        return true
    }

    return false
}

function imprimir() {
    window.print()
}
