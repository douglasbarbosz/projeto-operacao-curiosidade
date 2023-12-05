let idadeUsuario = document.querySelector('#idade')
idadeUsuario.value = localStorage.getItem('idadeUsuario')

let nomeUsuario = document.querySelector('.nomeLogado')
nomeUsuario.innerHTML = localStorage.getItem('nomeUsuario')

let emailUsuario = document.querySelector('#emailAtual')
emailUsuario.value = localStorage.getItem('emailUsuario')

let interessesUsuario = document.querySelector('#interesses')

if (localStorage.getItem('interessesUsuario') == 'NULL' || localStorage.getItem('interessesUsuario') == 'Preencher') {
    interessesUsuario.innerHTML = ' '
} else {
    interessesUsuario.value = localStorage.getItem('interessesUsuario')
}

let sentimentosUsuario = document.querySelector('#sentimentos')

if (localStorage.getItem('sentimentosUsuario') == 'NULL' || localStorage.getItem('sentimentosUsuario') == 'Preencher') {
    sentimentosUsuario.innerHTML = ' '
} else {
    sentimentosUsuario.value = localStorage.getItem('sentimentosUsuario')
}

let valoresUsuario = document.querySelector('#valores')

if (localStorage.getItem('valoresUsuario') == 'NULL' || localStorage.getItem('valoresUsuario') == 'Preencher') {
    valoresUsuario.innerHTML = ' '
} else {
    valoresUsuario.value = localStorage.getItem('valoresUsuario')
}