function aparecerConfirmacao() {
    let tela = $('#confirmacao');
    tela.show();
}

function esconderTela() {
    var tela = $('#confirmacao');
    tela.hide();
}

async function deletar() {
    try {
        const mensagem = document.querySelector('#mensagemDelete')
        const response = await fetch(`https://localhost:7132/api/Usuarios/deletar?email=${localStorage.getItem('email')}&senha=${localStorage.getItem('senha')}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        })

        if (response.ok) {
            setTimeout(() => {
                history.replaceState('', '', 'login.html');
                location.reload();
            }, 1000);
        
            localStorage.setItem('nome', '')
            localStorage.setItem('idade', '')
            localStorage.setItem('email', '')
            localStorage.setItem('senha', '')
            localStorage.setItem('interesses', '')
            localStorage.setItem('sentimentos', '')
            localStorage.setItem('valores', '')
        } else {
            const errorMessage = await response.json()
            mensagem.innerHTML = errorMessage.message
        }
    } catch (error) {
        console.error('Erro ao deletar a conta.')
    }
}