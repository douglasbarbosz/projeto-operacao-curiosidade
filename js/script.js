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

let statusRes = document.querySelector('#status')
let statusResposta = ''

document.addEventListener("DOMContentLoaded", function () {  
    if (statusRes) {
      if (statusRes.checked) {
        statusResposta = 'Ativo';
      } else {
        statusResposta = 'Inativo';
      }
    }
});
  

if (nome) {
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
}

if (idade) {
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
    })
}

if (endereco) {
    endereco.addEventListener('keyup', () => {
        if (endereco.value.length <= 3) {
            labelEndereco.setAttribute('style', 'color: red')
        } else {
            labelEndereco.innerHTML = 'Endereço válido'
            labelEndereco.setAttribute('style', 'color: green')
            validEndereco = true
        }
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
    })
}

if (confirmarSenha) {
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
}

if (interesses) {
    interesses.addEventListener('keyup', () => {
        if (interesses.value.length <= 5) {
            labelInteresses.setAttribute('style', 'color: red')
        } else {
            labelInteresses.setAttribute('style', 'color: green')
            validInteresses = true
        }
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

    if (pegaEmail.value == '' || pegaSenha.value == '') {
        campoVazio = true
    } else {
        for (let i in usuarios) {
            if (pegaEmail.value == usuarios[i].email && pegaSenha.value == usuarios[i].senha) {
                validaLogin = true
                break
            }
        }
    }

    if (validaLogin) {
        location.href = '../home.html'
    } else {
        if (campoVazio) {
            alert('Preencha todos os campos.')
        } else {
            alert('E-mail ou senha inconrreta. Tente novamente.')
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    addTabela()
})

function addTabela () {
    let tbody = document.querySelector('#tbody')

    if (tbody) {
        tbody.innerText = ''

        for (let i in usuarios) {
            let tr = tbody.insertRow()

            let tdNome = tr.insertCell()
            let tdEmail = tr.insertCell()
            let tdStatus = tr.insertCell()

            tdNome.classList.add('nome')
            tdEmail.classList.add('email')
            tdStatus.classList.add('status')

            tdNome.textContent = usuarios[i].nome
            tdEmail.textContent = usuarios[i].email
            tdStatus.textContent = usuarios[i].statusCad
        }
    }  
}

let barPesquisa = document.querySelector('#pesquisar')
let tabela = document.querySelector('#tabela')

barPesquisa.addEventListener('input', () => {
    let campoPesquisa = barPesquisa.value.toLowerCase()
    let linhasTab = tabela.querySelectorAll('tr')

    linhasTab.forEach(function (linha) {
        let nomeItem = linha.querySelector('td:first-child')
        
        if (nomeItem) {
            let nome = nomeItem.textContent.toLowerCase()
            if (nome.includes(campoPesquisa)) {
                linha.style.backgroundColor = 'red'
            } else {
                linha.style.display = 'none'
            }
        }
    })
})

function totalCadastros() {
    let valor1 = document.querySelector('#caixa1>p')
    let cont = 0

    for (let i in usuarios) {
        cont += 1
    }

    valor1.style.color = '#415996'
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

    valor2.style.color = '#3F9D2F'
    valor2.innerHTML = cont
}

function cadastrosComPendencia() {
    let valor3 = document.querySelector('#caixa3>p')

    valor3.style.color = '#C15959'
    valor3.innerHTML = 0
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
    } else {
        itens.style.display = 'none'
    }
}

function listarUsuarios() {
    location.href = 'lista-usuarios.html'
}

function sair() {
    location.replace('index.html')
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