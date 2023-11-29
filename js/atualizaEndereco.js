async function atualizaEndereco() {
    let mensagem = document.querySelector('#mensagemEndereco')
    try {
        const novoEndereco = document.querySelector('#novoEndereco').value

        const response = await fetch(`https://localhost:7132/api/Usuarios/atualizar-endereco?email=${localStorage.getItem('email')}&senha=${localStorage.getItem('senha')}&endereco=${novoEndereco}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(novoEndereco),
        })

        if (response.ok) {
            const data = await response.json()
            mensagem.innerHTML = data.message
            mensagem.style.color = 'green'
        } else {
            const errorMessage = await response.json()
            mensagem.innerHTML = errorMessage.message
            mensagem.style.color = 'red'
        }
    } catch (error) {
        console.error('Erro ao atualizar endereço.')
    }
}