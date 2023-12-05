async function abrirPerfilUsuario(email) {
    try {
        const response = await fetch(`https://localhost:7132/api/Usuarios/exibir-perfil-pessoa?email=${email}`)

        if (response.ok) {
            const data = await response.json()

            localStorage.setItem('nomeUsuario', data.nome)
            localStorage.setItem('emailUsuario', data.email)
            localStorage.setItem('idadeUsuario', data.idade)
            
            localStorage.setItem('interessesUsuario', data.interesses)
            localStorage.setItem('sentimentosUsuario', data.sentimentos)
            localStorage.setItem('valoresUsuario', data.valores)

            if (data.email == localStorage.getItem('email')) {
                location.href = 'perfil.html'
            } else {
                location.href = 'perfis.html'
            }
        } else {
            console.error('Erro ao obter dados da API:', response.status)
        }
    } catch (error) {
        console.error('Erro na requisição:', error)
    }
}
