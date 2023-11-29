function isEmailValid(email) {
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+[a-zA-z]{2,}$/
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
    const nomeRegex =  new RegExp(
        `^[a-zA-Z ]{3,70}$`
    )
    
    if (nomeRegex.test(nome)) {
        return true
    }

    return false
}