document.addEventListener('DOMContentLoaded', function() {
    addTabela()
})

async function addTabela() {
    let tbody = document.querySelector('#tbody')
    tbody.innerText = ''

    try {
        const response = await fetch('https://localhost:7132/api/Usuarios/listar')

        if (response.ok) {
            const usuarios = await response.json()
                
            for (let user of usuarios) {
                let tr = tbody.insertRow()
    
                let tdNome = tr.insertCell()
                let tdEmail = tr.insertCell()
                let tdStatus = tr.insertCell()
    
                tr.classList.add('tr')
                tdNome.classList.add('nome')
                tdEmail.classList.add('email')
                tdEmail.classList.add('abrirPerfil')
                tdStatus.classList.add('status')
    
                tdNome.onclick = function() {
                    abrirPerfilUsuario(user.email)
                }

                tdNome.textContent = user.nome
                tdEmail.textContent = user.email
                if (user.status == 0) {
                    tdStatus.textContent = 'Ativo'
                } else {
                    tdStatus.textContent = 'Inativo'
                }
            }
        }
        else {
            console.error('Erro ao obter dados da API:', response.status);
        }
    } catch (error) {
        console.error('Erro na requisição:', error);
    }
}

