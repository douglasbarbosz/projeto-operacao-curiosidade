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
                    localStorage.setItem('nome', nome.value)
                    localStorage.setItem('idade', idade.value)
                    localStorage.setItem('email', email.value)
                    localStorage.setItem('senha', senha.value)
                    localStorage.setItem('interesses', interesses.value)
                    localStorage.setItem('sentimentos', sentimentos.value)
                    localStorage.setItem('valores', valores.value)
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

