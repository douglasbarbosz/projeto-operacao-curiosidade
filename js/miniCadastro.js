async function miniCadastrar() {
    let mensagem = document.querySelector('#mensagem-cadastro')
    let email = document.querySelector('#emailCadastro').value
    let senha = document.querySelector('#senhaCadastro').value
    let nome = document.querySelector('#nomeCadastro').value

    if (isEmailValid(email) && isSenhaValid(senha) && isNomeValid(nome)) {
        const usuario = {
            nome: nome,
            email: email,
            senha: senha
        }
        try {
            const response = await fetch(`https://localhost:7132/api/Usuarios/mini-cadastrar?email=${email}&senha=${senha}&nome=${nome}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(usuario)
            })

            if (response.ok) {
                setTimeout(() => {
                    history.pushState(null, '', location.href = 'login.html')
                    localStorage.setItem('nome', nome)
                    localStorage.setItem('email', email)
                    localStorage.setItem('senha', senha)
                    localStorage.setItem('endereco', ' ')
                    localStorage.setItem('interesses', ' ')
                    localStorage.setItem('sentimentos', ' ')
                    localStorage.setItem('valores', ' ')
                }, 1000)

                mensagem.innerHTML = 'Cadastrando...' 
                mensagem.style.color = 'green' 
            } else {
                const errorMessage = await response.json()
                mensagem.innerHTML = errorMessage.message
            }
        } catch (error) {
            console.error('Erro ao fazer a requisição:', error)
        }
    } else if (!isEmailValid(email)) {
        mensagem.innerHTML = 'E-mail inválido.'
    } else if (!isSenhaValid(senha)) {
        mensagem.innerHTML = 'Senha inválida.'
    } else if (!isNomeValid(nome)) {
        mensagem.innerHTML = 'Nome inválido.'
    } else {
        mensagem.innerHTML = 'Preencha os campos corretamente.'
    }
}
