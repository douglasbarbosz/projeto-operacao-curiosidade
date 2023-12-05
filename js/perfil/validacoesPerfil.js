let validIdade = false
let idadeInput = document.querySelector('#idadeEdicao')
function verificarIdade() {
    let labelIdade = document.querySelector('#labelIdadeEdicao')

    idadeInput.addEventListener('keyup', () => {
        let idade = idadeInput.value

        if (!isIdadeValid(idade)) {
            if (idade <= 17) {
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
    })

    idadeInput.addEventListener('blur', () => {
        if (idadeInput.value === '') {
            labelIdade.innerHTML = 'Idade'
            labelIdade.style.color = 'black'
        }
    })
}

let validEmail = false
let emailEdicao = document.querySelector('#emailEdicao')
function verificarEmail() {
    let labelEmailEdicao = document.querySelector('#labelEmailEdicao')

    emailEdicao.addEventListener('keyup', () => {
        if (!isEmailValid(emailEdicao.value)) {
            labelEmailEdicao.innerHTML = 'E-mail inválido'
            labelEmailEdicao.setAttribute('style', 'color: red')
        } else {
            labelEmailEdicao.innerHTML = 'E-mail válido'
            labelEmailEdicao.setAttribute('style', 'color: green')
            validEmail = true
        }

        emailEdicao.addEventListener('blur', () => {
            if (emailEdicao.value == '') {
                labelEmailEdicao.innerHTML = 'E-mail'
                labelEmailEdicao.style.color = 'black'
            }
        })
    })
}

let validEndereco = false
let enderecoEdicao = document.querySelector('#enderecoEdicao')
function verificarEndereco() {
    let labelEnderecoEdicao = document.querySelector('#labelEnderecoEdicao')

    enderecoEdicao.addEventListener('keyup', () => {
        if (enderecoEdicao.value.length <= 3) {
            labelEnderecoEdicao.innerHTML = 'Endereço inválido'
            labelEnderecoEdicao.setAttribute('style', 'color: red')
        } else {
            labelEnderecoEdicao.innerHTML = 'Endereço válido'
            labelEnderecoEdicao.setAttribute('style', 'color: green')
            validEndereco = true
        }

        enderecoEdicao.addEventListener('blur', () => {
            if (enderecoEdicao.value == '') {
                labelEnderecoEdicao.innerHTML = 'Endereço'
                labelEnderecoEdicao.style.color = 'black'
            }
        })
    })
}

let validSenha = false
let senha = document.querySelector('#senhaCad')
function verificarSenha() {
    let labelSenha = document.querySelector('#labelSenha')

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
                labelSenha.innerHTML = 'Senha atual'
                labelSenha.style.color = 'black'
            }
        })
    })
}

let validConfirmarSenha = false
let confirmarSenha = document.querySelector('#confirmarSenha')
function verificarConfirmarSenha() {
    let labelConfirmarSenha = document.querySelector('#labelConfirmarSenha')

    confirmarSenha.addEventListener('keyup', () => {
        if (!isSenhaValid(confirmarSenha.value)) {
            labelConfirmarSenha.innerHTML = 'Senha inválida.'
            labelConfirmarSenha.setAttribute('style', 'color: red')
        } else {
            labelConfirmarSenha.innerHTML = 'Senha válida.'
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

let validInteresses = false
let interessesEdicao = document.querySelector('#interessesEdicao')
function verificarInteresses() {
    let labelInteressesEdicao = document.querySelector('#labelInteressesEdicao')
    interessesEdicao.addEventListener('keyup', () => {
        if (interessesEdicao.value.length <= 5) {
            labelInteressesEdicao.setAttribute('style', 'color: red')
        } else {
            labelInteressesEdicao.setAttribute('style', 'color: green')
            validInteresses = true
        }

        interessesEdicao.addEventListener('blur', () => {
            if (interessesEdicao.value == '') {
                labelInteressesEdicao.innerHTML = 'Interesses'
                labelInteressesEdicao.style.color = 'black'
            }
        })
    })
}

let validSentimentos = false
let sentimentosEdicao = document.querySelector('#sentimentosEdicao')
function verificarSentimentos() {
    let labelSentimentosEdicao = document.querySelector('#labelSentimentosEdicao')

    sentimentosEdicao.addEventListener('keyup', () => {
        if (sentimentosEdicao.value.length <= 5) {
            labelSentimentosEdicao.setAttribute('style', 'color: red')
        } else {
            labelSentimentosEdicao.setAttribute('style', 'color: green')
            validSentimentos = true
        }

        sentimentosEdicao.addEventListener('blur', () => {
            if (sentimentosEdicao.value == '') {
                labelSentimentosEdicao.innerHTML = 'Sentimentos'
                labelSentimentosEdicao.style.color = 'black'
            }
        })
    })
}

let validValores = false
let valoresEdicao = document.querySelector('#valoresEdicao')
function verificarValores() {
    let labelValoresEdicao = document.querySelector('#labelValoresEdicao')

    valoresEdicao.addEventListener('keyup', () => {
        if (valoresEdicao.value.length <= 5) {
            labelValoresEdicao.setAttribute('style', 'color: red')
        } else {
            labelValoresEdicao.setAttribute('style', 'color: green')
            validValores = true
        }

        valoresEdicao.addEventListener('blur', () => {
            if (valoresEdicao.value == '') {
                labelValoresEdicao.innerHTML = 'Valores'
                labelValoresEdicao.style.color = 'black'
            }
        })
    })
}
