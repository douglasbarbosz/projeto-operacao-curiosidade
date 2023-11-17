document.addEventListener('DOMContentLoaded', function() {
    addTabela()
})

function addTabela () {
    let tbody = document.querySelector('#tbody')

    if (tbody) {
        tbody.innerText = ''

        for (let i in usuarios) {
            let tr = tbody.insertRow()

            let tdNome = tr.insertCell()
            let tdEmail = tr.insertCell()
            let tdStatus = tr.insertCell()

            tr.classList.add('tr')
            tdNome.classList.add('nome')
            tdEmail.classList.add('email')
            tdStatus.classList.add('status')

            tdNome.textContent = usuarios[i].nome
            tdEmail.textContent = usuarios[i].email
            tdStatus.textContent = usuarios[i].statusCad
        }
    }
}