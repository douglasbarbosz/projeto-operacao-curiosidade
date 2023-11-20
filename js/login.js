async function logar() {
    campoVazio = false
    let pegaEmail = document.querySelector('#emailLogin')
    let pegaSenha = document.querySelector('#senhaLogin')
    let msg = document.querySelector('#mensagem')

    if (pegaEmail.value == '' || pegaSenha.value == '') {
        msg.innerHTML = 'Um ou mais campos vazios.'
        msg.style.color = 'gray'
    } else {
        if (!isEmailValid(pegaEmail.value)) {
            msg.innerHTML = 'E-mail inválido. Tente novamente'
            msg.style.color = 'red'
            pegaEmail.innerHTML = ''
        } else if (!isSenhaValid(pegaSenha.value)) {
            msg.innerHTML = 'Senha inválida. Tente novamente'
            msg.style.color = 'red'
            pegaSenha.innerHTML = ''
        } else {
            try {
                const response = await fetch('https://localhost:7132/api/Usuarios/listar', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: pegaEmail.value,
                        senha: pegaSenha.value
                    }),
                })

                if (response.ok) {
                    const data = await response.json()

                    if (data) {
                        msg.innerHTML = 'Entrando...'
                        msg.style.color = 'green'

                        setTimeout(() => {
                            location.href = 'index.html'
                        }, 500);
                    } else {
                        msg.innerHTML = 'Credenciais inválidas.'
                    }
                } else {
                    msg.innerHTML = 'Erro ao realizar login'
                }
            } 
            catch {
                console.error('Erro ao realizar requisição.')
            }
        }
    }
}