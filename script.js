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

function gravar() {
    const nome = document.getElementsById('nome').value
    const idade = document.getElementsById('idade').value
    const email = document.getElementsById('email').value
    const endereco = document.getElementsById('endereco').value
    const valores = document.getElementsById('valores').value
    const status = document.getElementsByName('status').checked

    if (nome && idade && email && endereco && valores) {
        const tabela = document.querySelector('#tabela>tbody')

        const novaLinha = document.createElement('tr')
        const novoNome = document.createElement('td')
        const novoEmail = document.createElement('td')
        const novoStatus = document.createElement('td')

        novoNome.classList.add('nome')
        novoEmail.classList.add('email')
        novoStatus.classList.add('status')

        novoNome.text = nome
        novoNome.text = status
        novoStatus.text = status ? 'Ativo' : 'Inativo'

        tabela.appendChild(novaLinha)
        novaLinha.appendChild(novoNome)
        novaLinha.appendChild(novoEmail)
        novaLinha.appendChild(novoStatus)
    }
}

function imprimir() {

}