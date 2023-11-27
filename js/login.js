async function logar() {
    let pegaEmail = document.querySelector('#emailLogin').value
    let pegaSenha = document.querySelector('#senhaLogin').value
    let msg = document.querySelector('#mensagem') 

    try {
        if (pegaEmail === '' || pegaSenha === '') {
            msg.innerHTML = 'Um ou mais campos vazios.' 
            msg.style.color = 'gray' 
        } else if (!isEmailValid(pegaEmail)) {
            msg.innerHTML = 'E-mail inválido. Tente novamente' 
            msg.style.color = 'red' 
            pegaEmail.innerHTML = '' 
        } else if (!isSenhaValid(pegaSenha)) {
            msg.innerHTML = 'Senha inválida. Tente novamente' 
            msg.style.color = 'red' 
            pegaSenha.innerHTML = '' 
        } else {
            const usuarioLogin = {
                email: pegaEmail,
                senha: pegaSenha
            }
            const response = await fetch(`https://localhost:7132/api/Usuarios/logar?email=${pegaEmail}&senha=${pegaSenha} `, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(usuarioLogin),
            }) 
            
            if (response.ok) {
                const data = await response.json()
                const nomeUsuario = data.nome
                const emailUsuario = data.email
                const senhaUsuario = data.senha
                
                localStorage.setItem("nome", nomeUsuario)
                localStorage.setItem("email", emailUsuario)
                localStorage.setItem("senha", senhaUsuario)
                msg.innerHTML = 'Entrando...' 
                msg.style.color = 'green' 

                setTimeout(() => {
                    location.href = 'index.html' 
                }, 500)
            } else {
                const errorMessage = await response.json()
                msg.innerHTML = errorMessage.message
                msg.style.color = 'red' 
            }
        }
    } catch (error) {
        console.error('Erro ao realizar requisição:', error) 
    }
}

function abrirCadastrar() {
    location.href = 'pagina-cadastro.html'
}