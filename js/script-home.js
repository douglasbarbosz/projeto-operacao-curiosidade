window.onload = function() {
    totalCadastros(), 
    totalCadastrosUltimoMes(),
    cadastrosComPendencia()
}

function totalCadastros() {
    let valor1 = document.querySelector('#caixa1>p')

    valor1.style.color = '#415996'
}

function totalCadastrosUltimoMes() {
    let valor2 = document.querySelector('#caixa2>p')

    valor2.style.color = '#3F9D2F'
}

function cadastrosComPendencia() {
    let valor3 = document.querySelector('#caixa3>p')

    valor3.style.color = '#C15959'
}