async function atualizarDados() {
    let caixaSucesso = document.querySelector('#msgSucesso')
    let caixaErro = document.querySelector('#msgErro')
    if (validIdade && validEmail && validEndereco && validSenha && validConfirmarSenha && validInteresses && validSentimentos && validValores) {
        if (localStorage.getItem('senha') == senha.value) {
            const usuario = { 
                idade: idadeEdicao.value,
                email: localStorage.getItem('email'),
                novoEmail: emailEdicao.value,
                endereco: enderecoEdicao.value,
                senha: confirmarSenha.value,
                interesses: interessesEdicao.value,
                sentimentos: sentimentosEdicao.value,
                valores: valoresEdicao.value,
                token: localStorage.getItem('token')
            }
    
            try {
                const response = await fetch('https://localhost:7132/api/Usuarios/atualizar-dados', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${usuario.token}`
                    },
                    body: JSON.stringify(usuario)
                })
    
                if (response.ok) {
                    const data = await response.json()

                    setTimeout(() => {
                        history.pushState(null, '', location.href = 'perfil.html')
                        localStorage.setItem('idade', idadeEdicao.value)
                        localStorage.setItem('email', emailEdicao.value)
                        localStorage.setItem('endereco', enderecoEdicao.value)
                        localStorage.setItem('senha', confirmarSenha.value)
                        localStorage.setItem('interesses', interessesEdicao.value)
                        localStorage.setItem('sentimentos', sentimentosEdicao.value)
                        localStorage.setItem('valores', valoresEdicao.value)
                    }, 1000)
    
                    caixaSucesso.setAttribute('style', 'display: block')
                    caixaSucesso.innerHTML = data.message
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
            caixaErro.innerHTML = 'Senha incorreta.'
            caixaErro.style.display = 'block'
            caixaSucesso.style.display = 'none'
            caixaSucesso.innerHTML = ''
        }
    } else {
        caixaErro.innerHTML = 'Preencha todos os campos corretamente'
        caixaErro.setAttribute('style', 'display: block')
        caixaSucesso.setAttribute('style', 'display: none')
        caixaSucesso.innerHTML = ''
    }
}

verificarIdade()
verificarEmail()
verificarEndereco()
verificarSenha()
verificarConfirmarSenha()
verificarInteresses()
verificarSentimentos()
verificarValores()