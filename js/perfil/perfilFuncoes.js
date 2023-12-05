let nomeNaTelaPerfil = document.querySelector('#topo-titulo')
nomeNaTelaPerfil.innerHTML = localStorage.getItem('nome')

let emailFixo = document.querySelector('#emailAtual')
let emailFixoEdicao = document.querySelector('#emailEdicao')
emailFixo.value = localStorage.getItem('email')
emailFixoEdicao.value = localStorage.getItem('email')

let idadePerfil = document.querySelector('#idade')
let idadePerfilEdicao = document.querySelector('#idadeEdicao')
idadePerfil.value = localStorage.getItem('idade')
idadePerfilEdicao.value = localStorage.getItem('idade')

let enderecoPerfil = document.querySelector('#endereco')
let enderecoPerfilEdicao = document.querySelector('#enderecoEdicao')
enderecoPerfil.value = localStorage.getItem('endereco')
enderecoPerfilEdicao.value = localStorage.getItem('endereco')

let interessesPerfil = document.querySelector('#interesses')
let interessesPerfilEdicao = document.querySelector('#interessesEdicao')
interessesPerfil.value = localStorage.getItem('interesses')
interessesPerfilEdicao.value = localStorage.getItem('interesses')

let sentimentosPerfil = document.querySelector('#sentimentos')
let sentimentosPerfilEdicao = document.querySelector('#sentimentosEdicao')
sentimentosPerfil.value = localStorage.getItem('sentimentos')
sentimentosPerfilEdicao.value = localStorage.getItem('sentimentos')

let valoresPerfil = document.querySelector('#valores')
let valoresPerfilEdicao = document.querySelector('#valoresEdicao')
valoresPerfil.value = localStorage.getItem('valores')
valoresPerfilEdicao.value = localStorage.getItem('valores')

let nomeNoPerfil = document.querySelector('.nomeLogado')
nomeNoPerfil.innerHTML = localStorage.getItem('nome')

function abrirEditar() {
    let formularioPerfil = document.querySelector('#formulario')
    let formularioEdicao = document.querySelector('.formulario-edicao')

    if (formularioPerfil.style.opacity === '1' || formularioPerfil.style.opacity === '') {
        formularioPerfil.style.transition = 'opacity 2s ease'
        formularioPerfil.style.opacity = '0'
        formularioPerfil.style.pointerEvents = 'none'
        formularioPerfil.style.display = 'none'

        formularioEdicao.style.transition = 'opacity 2s ease'
        formularioEdicao.style.opacity = '1'
        formularioEdicao.style.pointerEvents = 'auto'
        formularioEdicao.style.display = 'block'
    } else {
        formularioEdicao.style.transition = 'opacity 2s ease'
        formularioEdicao.style.opacity = '0'
        formularioEdicao.style.pointerEvents = 'none'
        formularioEdicao.style.display = 'none'

        formularioPerfil.style.transition = 'opacity 2s ease'
        formularioPerfil.style.opacity = '1'
        formularioPerfil.style.pointerEvents = 'auto'
        formularioPerfil.style.display = 'block'
    }
}