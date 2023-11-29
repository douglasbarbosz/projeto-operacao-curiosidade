async function atualizaEmail() {
    let mensagem = document.querySelector('#mensagemEmail')
    try {
        const novoEmail = document.querySelector('#novoEmail').value

        if (isEmailValid(novoEmail)) {
                const response = await fetch(`https://localhost:7132/api/Usuarios/atualizar-email?email=${localStorage.getItem('email')}&senha=${localStorage.getItem('senha')}&novoEmail=${novoEmail}`, {
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

                localStorage.setItem('email', novoEmail)
                novoEmail.innerHTML = ''
            } else {
                const errorMessage = await response.json()
                mensagem.innerHTML = errorMessage.message
                mensagem.style.color = 'red'
            }
        }  
    } catch (error) {
        console.error('Erro ao atualizar e-mail.')
    }
}