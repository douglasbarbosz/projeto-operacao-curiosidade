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

async function cadastrar() {
    let data = new Date()
    if (validNome && validIdade && validEmail && validEndereco && validSenha && validConfirmarSenha && validInteresses && validSentimentos && validValores && statusResposta) {
        const usuario = {
            nome: nome.value, 
            idade: idade.value,
            email: email.value,
            endereco: endereco.value,
            senha: senha.value,
            interesses: interesses.value,
            sentimentos: sentimentos.value,
            valores: valores.value,
            statusCad: statusResposta,
            dataCad: data.toISOString()
        }

        try {
            const response = await fetch('https://localhost:7132/api/Usuarios/cadastrar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(usuario)
            })

            if (response.ok) {
                setTimeout(() => {
                    history.pushState(null, '', location.href = 'login.html')
                    localStorage.setItem('email', '')
                    localStorage.setItem('senha', '')
                }, 1000)

                caixaSucesso.setAttribute('style', 'display: block')
                caixaSucesso.innerHTML = 'Cadastrando usuário...'
                caixaErro.setAttribute('style', 'display: none')
                caixaErro.innerHTML = ''
            } else {
                const errorMessage = await response.json()
                caixaErro.innerHTML = errorMessage.message
                caixaErro.style.display = 'block'
                caixaSucesso.style.display = 'none'
                caixaSucesso.innerHTML = ''
            }
        } catch (error) {
            console.error('Erro ao fazer a requisição:', error)
        }
    } else {
        caixaErro.innerHTML = 'Preencha todos os campos corretamente'
        caixaErro.setAttribute('style', 'display: block')
        caixaSucesso.setAttribute('style', 'display: none')
        caixaSucesso.innerHTML = ''
    }
}

