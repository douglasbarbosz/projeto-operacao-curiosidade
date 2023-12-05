let barPesquisa = document.querySelector('#pesquisar')
let tabela = document.querySelector('#tabela')

document.addEventListener('DOMContentLoaded', function() {
    mudouTamanho()
})

if (barPesquisa) {
    barPesquisa.addEventListener('input', () => {
        let campoPesquisa = barPesquisa.value.toLowerCase()
        let linhasTab = tabela.querySelectorAll('tr')
    
        linhasTab.forEach(function (linha) {
            let nomeItem = linha.querySelector('td:first-child')
    
            if (nomeItem) {
                const nome = nomeItem.textContent.toLowerCase()
                if (campoPesquisa === '' || nome.includes(campoPesquisa)) {
                    linha.style.display = ''
                } else {
                    linha.style.display = 'none'
                }
            }
        })
    })
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

function abrirPerfil() {
    location.href = 'perfil.html'
}

function listarUsuarios() {
    location.href = 'lista-usuarios.html'
}

function sair() {
    location.href = 'login.html'
    history.pushState(null, '', location.href = 'login.html')
    localStorage.setItem('nome', ' ')
    localStorage.setItem('idade', ' ')
    localStorage.setItem('email', ' ')
    localStorage.setItem('endereco', ' ')
    localStorage.setItem('senha', ' ')
    localStorage.setItem('interesses', ' ')
    localStorage.setItem('sentimentos', ' ')
    localStorage.setItem('valores', ' ')
}

function abrirHome() {
    location.href = 'index.html'
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
    window.print()
}

let nomeLogadoResponsivo = document.querySelector('#nameCompleto')
let nomeLogadoGrande = document.querySelector('#nomeLogado')

nomeLogadoResponsivo.innerHTML = localStorage.getItem('nome')
nomeLogadoGrande.innerHTML = localStorage.getItem('nome')