const usuarios = [
    {
        login: 'admin', 
        senha: 'admin'
    }, 
    {
        login: 'douglas',
        senha: 'douglas'
    }
]
    
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

window.onload = function() {
    totalCadastros(), 
    totalCadastrosUltimoMes(),
    cadastrosComPendencia()
}

function totalCadastros() {
    let valor1 = document.querySelector('#caixa1>p')

    valor1.style.color = '#415996'
}

function totalCadastrosUltimoMes() {
    let valor2 = document.querySelector('#caixa2>p')

    valor2.style.color = '#3F9D2F'
}

function cadastrosComPendencia() {
    let valor3 = document.querySelector('#caixa3>p')

    valor3.style.color = '#C15959'
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

function cadastrar() {
    const nome = document.getElementById('inome').value
    const idade = document.getElementById('idade').value
    const email = document.getElementById('email').value
    const status = document.getElementById('status').checked
    const endereco = document.getElementById('endereco').value
    const senha = document.getElementById('senha').value


    
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

function imprimir() {

}