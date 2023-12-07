function isIdadeValid(idade) {
    const idadeRegex = new RegExp(
        /^(1[789]|[2-9][0-9]|110)$/
    )

    if (idadeRegex.test(idade)) {
        return true
    }

    return false
}

function isEmailValid(email) {
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    )

    if (emailRegex.test(email)) {
        return true
    }
    
    return false
}

function isSenhaValid(senha) {
    const senhaRegex = new RegExp(
        `^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[\\W_]).{8,}$`
    )

    if (senhaRegex.test(senha)) {
        return true
    }

    return false
}

function isNomeValid(nome) {
    const nomeRegex = /^[a-zA-ZÀ-ÖØ-öø-ÿ ]{3,70}$/
    
    return nomeRegex.test(nome)
}