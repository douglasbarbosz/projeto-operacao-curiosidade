async function atualizaSenha() {
    let mensagem = document.querySelector('#mensagemSenha')
    try {
        const novaSenha = document.querySelector('#novaSenha').value
        if (isSenhaValid(novaSenha)) {
                const response = await fetch(`https://localhost:7132/api/Usuarios/atualizar-senha?email=${localStorage.getItem('email')}&senha=${localStorage.getItem('senha')}&novaSenha=${novaSenha}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(novoEmail),
            })

            if (response.ok) {
            const data = await response.json()
            mensagem.innerHTML = data.message
            mensagem.style.color = 'green'

            localStorage.setItem('senha', novaSenha)
            } else {
                const errorMessage = await response.json()
                mensagem.innerHTML = errorMessage.message
                mensagem.style.color = 'red'
            }
        }
    } catch (error) {
        console.error('Erro ao atualizar senha.')
    }
}