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

function imprimir() {

}