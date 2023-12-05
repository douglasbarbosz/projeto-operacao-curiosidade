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

let senha = document.querySelector('#senhaCad')
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

let statusRes = document.querySelector('#status')
let statusResposta = ''

document.addEventListener("DOMContentLoaded", function () {  
    if (statusRes) {
      if (statusRes.checked) {
        statusResposta = 'Ativo'
      } else {
        statusResposta = 'Inativo'
      }
    }
})

function verificarNome() {
    nome.addEventListener('keyup', () => {
        if (!isNomeValid(nome.value)) {
            if (nome.value == '') {
                labelNome.innerHTML = 'Digite um nome'
            } else {
                labelNome.innerHTML = 'Nome (Digite no minímo 3 caracteres)'
                labelNome.setAttribute('style', 'color: red')
            }
        } else {
            labelNome.innerHTML = 'Nome'
            labelNome.setAttribute('style', 'color: green')
            validNome = true
        }

        nome.addEventListener('blur', () => {
            if (nome.value == '') {
                labelNome.innerHTML = 'Nome'
                labelNome.style.color = 'black'
            }
        })
    })
}

function verificarIdade() {
    idade.addEventListener('keyup', () => {
        if (!isIdadeValid(idade.value)) {
            if (idade.value <= 17) {
                labelIdade.innerHTML = 'Somente maiores'
            } else {
                labelIdade.innerHTML = 'Idade inválida.'
            }
            labelIdade.setAttribute('style', 'color: red')
        } else {
            labelIdade.innerHTML = 'Idade'
            labelIdade.setAttribute('style', 'color: green')
            validIdade = true
        }

        idade.addEventListener('blur', () => {
            if (idade.value == '') {
                labelIdade.innerHTML = 'Idade'
                labelIdade.style.color = 'black'
            }
        })
    })
}

function verificarEmail() {
    email.addEventListener('keyup', () => {
        if (!isEmailValid(email.value)) {
            labelEmail.innerHTML = 'E-mail inválido'
            labelEmail.setAttribute('style', 'color: red')
        } else {
            labelEmail.innerHTML = 'E-mail válido'
            labelEmail.setAttribute('style', 'color: green')
            validEmail = true
        }

        email.addEventListener('blur', () => {
            if (email.value == '') {
                labelEmail.innerHTML = 'E-mail'
                labelEmail.style.color = 'black'
            }
        })
    })
}

function verificarEndereco() {
    endereco.addEventListener('keyup', () => {
        if (endereco.value.length <= 3) {
            labelEndereco.innerHTML = 'Endereço inválido'
            labelEndereco.setAttribute('style', 'color: red')
        } else {
            labelEndereco.innerHTML = 'Endereço válido'
            labelEndereco.setAttribute('style', 'color: green')
            validEndereco = true
        }

        endereco.addEventListener('blur', () => {
            if (endereco.value == '') {
                labelEndereco.innerHTML = 'Endereço'
                labelEndereco.style.color = 'black'
            }
        })
    })
}

function verificarSenha() {
    senha.addEventListener('keyup', () => {
        if (!isSenhaValid(senha.value)) {
            labelSenha.innerHTML = 'Senha inválida'
            labelSenha.setAttribute('style', 'color: red')
        } else {
            labelSenha.innerHTML = 'Senha válida'
            labelSenha.setAttribute('style', 'color: green')
            validSenha = true
        }

        senha.addEventListener('blur', () => {
            if (senha.value == '') {
                labelSenha.innerHTML = 'Senha'
                labelSenha.style.color = 'black'
            }
        })
    })
}

function verificarConfirmarSenha() {
    confirmarSenha.addEventListener('keyup', () => {
        if (senha.value != confirmarSenha.value) {
            labelConfirmarSenha.innerHTML = 'Senhas diferentes'
            labelConfirmarSenha.setAttribute('style', 'color: red')
        } else {
            labelConfirmarSenha.innerHTML = 'Senhas iguais'
            labelConfirmarSenha.setAttribute('style', 'color: green')
            validConfirmarSenha = true
        }

        confirmarSenha.addEventListener('blur', () => {
            if (confirmarSenha.value == '') {
                labelConfirmarSenha.innerHTML = 'Confirmar senha'
                labelConfirmarSenha.style.color = 'black'
            }
        })
    })
}

function verificarInteresses() {
    interesses.addEventListener('keyup', () => {
        if (interesses.value.length <= 5) {
            labelInteresses.setAttribute('style', 'color: red')
        } else {
            labelInteresses.setAttribute('style', 'color: green')
            validInteresses = true
        }

        interesses.addEventListener('blur', () => {
            if (interesses.value == '') {
                labelInteresses.innerHTML = 'Interesses'
                labelInteresses.style.color = 'black'
            }
        })
    })
}

function verificarSentimentos() {
    sentimentos.addEventListener('keyup', () => {
        if (sentimentos.value.length <= 5) {
            labelSentimentos.setAttribute('style', 'color: red')
        } else {
            labelSentimentos.setAttribute('style', 'color: green')
            validSentimentos = true
        }

        sentimentos.addEventListener('blur', () => {
            if (sentimentos.value == '') {
                labelSentimentos.innerHTML = 'Sentimentos'
                labelSentimentos.style.color = 'black'
            }
        })
    })
}

function verificarValores() {
    valores.addEventListener('keyup', () => {
        if (valores.value.length <= 5) {
            labelValores.setAttribute('style', 'color: red')
        } else {
            labelValores.setAttribute('style', 'color: green')
            validValores = true
        }

        valores.addEventListener('blur', () => {
            if (valores.value == '') {
                labelValores.innerHTML = 'Valores'
                labelValores.style.color = 'black'
            }
        })
    })
}

verificarNome()
verificarIdade()
verificarEmail()
verificarEndereco()
verificarSenha()
verificarConfirmarSenha()
verificarInteresses()
verificarSentimentos()
verificarValores()