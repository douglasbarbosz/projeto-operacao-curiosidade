let usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]')

window.onload = function() {
    totalCadastros(), 
    totalCadastrosUltimoMes(),
    cadastrosComPendencia()
}

async function totalCadastros() {
    try {
        const response = await fetch('https://localhost:7132/api/Usuarios/total-cadastros')
        
        if (response.ok) {
            const data = await response.json()
            const cont = data

            let valor1 = document.querySelector('#caixa1>p')
            valor1.style.color = '#ff1414'
            valor1.innerHTML = cont
        } else {
            console.error('Erro ao obter o número de cadastros:', response.status)
        }
    } catch (error) {
        console.error('Erro na requisição:', error)
    }
}

async function totalCadastrosUltimoMes() {
    try {
        const response = await fetch('https://localhost:7132/api/Usuarios/total-cadastros-ultimo-mes')
        
        if (response.ok) {
            const data = await response.json()
            const cont = data

            let valor2 = document.querySelector('#caixa2>p')
            valor2.style.color = '#ca5555'
            valor2.innerHTML = cont
        } else {
            console.error('Erro ao obter o número de cadastros:', response.status)
        }
    } catch (error) {
        console.error('Erro na requisição:', error)
    }
}

async function cadastrosComPendencia() {
    try {
        const response = await fetch('https://localhost:7132/api/Usuarios/contador-de-mini-cadastros')
        
        if (response.ok) {
            const data = await response.json()
            const cont = data

            let valor3 = document.querySelector('#caixa3>p')
            valor3.style.color = '#e00371'
            valor3.innerHTML = cont
        } else {
            console.error('Erro ao obter o número de cadastros:', response.status)
        }
    } catch (error) {
        console.error('Erro na requisição:', error)
    }
}