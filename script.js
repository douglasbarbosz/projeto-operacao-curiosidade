function logar() {
    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value

    if (email == "admin@admin" && senha == "admin") {
        location.href = 'home.html'
    } else {
        alert('E-mail ou senha incorreta. Por favor, tente novamente.')
        document.getElementById('senha').value = ''
        return false
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

function cadastrar() {
    const nome = document.getElementById('inome').value
    const email = document.getElementById('email').value
    const status = document.getElementById('status').checked

    if (nome && email) {
        const tabela = document.querySelector('#tabela>tbody')

        const novaLinha = document.createElement('tr')
        const novoNome = document.createElement('td')
        const novoEmail = document.createElement('td')
        const novoStatus = document.createElement('td')

        novoNome.classList.add('nome')
        novoEmail.classList.add('email')
        novoStatus.classList.add('status')

        novoNome.text = nome
        novoEmail.text = email
        novoStatus.text = status ? 'Ativo' : 'Inativo'

        tabela.appendChild(novaLinha)
        novaLinha.appendChild(novoNome)
        novaLinha.appendChild(novoEmail)
        novaLinha.appendChild(novoStatus)
    }
}

function imprimir() {

}