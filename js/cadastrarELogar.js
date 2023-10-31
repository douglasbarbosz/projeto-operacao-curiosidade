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

if (nome) {
    nome.addEventListener('keyup', () => {
        if (nome.value.length <= 2) {
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
        });
    })
}

if (idade) {
    idade.addEventListener('keyup', () => {
        if (idade.value <= 17 || idade.value >= 110) {
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
        });
    })
}

if (email) {
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
        });
    })
}

if (endereco) {
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
        });
    })
}

if (senha) {
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
        });
    })
}

if (confirmarSenha) {
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
        });
    })
}

if (interesses) {
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
        });
    })
}

if (sentimentos) {
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
        });
    })
}

if (valores) {
    valores.addEventListener('keyup', () => {
        if (valores.value.length <= 5) {
            labelValores.setAttribute('style', 'color: red')
        } else {
            labelValores.setAttribute('style', 'color: green')
            validValores = true
        }

        valores.addEventListener('blur', () => {
            if (valores.value) {
                labelValores.innerHTML = 'Valores'
                labelValores.style.color = 'black'
            }
        });
    })
}

let usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]')

function cadastrar() {
    let data = new Date()
    if (validNome && validIdade && validEmail && validEndereco && validSenha && validConfirmarSenha && validInteresses && validSentimentos && validValores && statusResposta) {
        usuarios.push({
            nome: nome.value, 
            idade: idade.value,
            email: email.value,
            endereco: endereco.value,
            senha: senha.value,
            interesses: interesses.value,
            sentimentos: sentimentos.value,
            valores: valores.value,
            statusCad: statusResposta,
            dataCad: data
        })

        localStorage.setItem('usuarios', JSON.stringify(usuarios))

        setTimeout(() => {
            window.location.href = 'index.html'
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
    campoVazio = false
    let pegaEmail = document.querySelector('#emailLogin')
    let pegaSenha = document.querySelector('#senhaLogin')
    let validaLogin = false
    let mensagem = ''

    if (pegaEmail.value == '' || pegaSenha.value == '') {
        campoVazio = true
    } else {
        if (!isEmailValid(pegaEmail.value)) {
            mensagem = 'E-mail inválido. Tente novamente'
            pegaEmail.innerHTML = ''
        } else if (!isSenhaValid(pegaSenha.value)) {
            mensagem = 'Senha inválida. Tente novamente'
            pegaSenha.innerHTML = ''
        } else {
            for (let i in usuarios) {
                if (pegaEmail.value == usuarios[i].email && pegaSenha.value == usuarios[i].senha) {
                    validaLogin = true
                    break
                }
            }
        }
    }

    let msg = document.querySelector('#mensagem')

    if (validaLogin) {
        msg.innerHTML = 'Entrando...'
        msg.style.color = 'green'
        setTimeout(() => {
            location.href = '../index.html'
        }, 1000) 
    } else {
        if (campoVazio) {
            msg.innerHTML = 'Preencha todos os campos'
        } else {
            msg.innerHTML = mensagem
        }
    }
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

function totalCadastros() {
    let valor1 = document.querySelector('#caixa1>p')
    let cont = 0

    for (let i in usuarios) {
        cont += 1
    }

    valor1.style.color = '#ff1414'
    valor1.innerHTML = cont
}

function totalCadastrosUltimoMes() {
    let valor2 = document.querySelector('#caixa2>p')

    let dataAtual = new Date()
    let dataMesPassado = new Date(dataAtual)
    dataMesPassado.setMonth(dataMesPassado.getMonth() - 1)

    let cont = 0
    for (let i in usuarios) {
        if (usuarios[i].data && usuarios[i].data instanceof Date) {
            if (usuarios[i].data.getMonth() === dataMesPassado.getMonth() && usuarios[i].data.getFullYear() === dataMesPassado.getFullYear()) {
                cont += 1
            }
        }
    }

    valor2.style.color = '#ca5555'
    valor2.innerHTML = cont
}

function cadastrosComPendencia() {
    let valor3 = document.querySelector('#caixa3>p')

    valor3.style.color = '#e00371'
    valor3.innerHTML = 0
}