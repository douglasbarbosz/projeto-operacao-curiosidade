document.addEventListener("DOMContentLoaded", function () {  
    if (statusRes) {
      if (statusRes.checked) {
        statusResposta = 'Ativo'
      } else {
        statusResposta = 'Inativo'
      }
    }
})

if (nome) {
    nome.addEventListener('keyup', () => {
        if (nome.value.length <= 2) {
            if (nome.value == '') {
                labelNome.innerHTML = 'Digite um nome'
            } else {
                labelNome.innerHTML = 'Nome (Digite no minímo 3 caracteres)'
                labelNome.setAttribute('style', 'color: red')
            }
        } else {
            labelNome.innerHTML = 'Nome'
            labelNome.setAttribute('style', 'color: green')
            validNome = true
        }

        nome.addEventListener('blur', () => {
            if (nome.value == '') {
                labelNome.innerHTML = 'Nome'
                labelNome.style.color = 'black'
            }
        });
    })
}

if (idade) {
    idade.addEventListener('keyup', () => {
        if (idade.value <= 17 || idade.value >= 110) {
            if (idade.value <= 17) {
                labelIdade.innerHTML = 'Somente maiores'
            } else {
                labelIdade.innerHTML = 'Idade inválida.'
            }
            labelIdade.setAttribute('style', 'color: red')
        } else {
            labelIdade.innerHTML = 'Idade'
            labelIdade.setAttribute('style', 'color: green')
            validIdade = true
        }

        idade.addEventListener('blur', () => {
            if (idade.value == '') {
                labelIdade.innerHTML = 'Idade'
                labelIdade.style.color = 'black'
            }
        });
    })
}

if (email) {
    email.addEventListener('keyup', () => {
        if (!isEmailValid(email.value)) {
            labelEmail.innerHTML = 'E-mail inválido'
            labelEmail.setAttribute('style', 'color: red')
        } else {
            labelEmail.innerHTML = 'E-mail válido'
            labelEmail.setAttribute('style', 'color: green')
            validEmail = true
        }

        email.addEventListener('blur', () => {
            if (email.value == '') {
                labelEmail.innerHTML = 'E-mail'
                labelEmail.style.color = 'black'
            }
        });
    })
}

if (endereco) {
    endereco.addEventListener('keyup', () => {
        if (endereco.value.length <= 3) {
            labelEndereco.innerHTML = 'Endereço inválido'
            labelEndereco.setAttribute('style', 'color: red')
        } else {
            labelEndereco.innerHTML = 'Endereço válido'
            labelEndereco.setAttribute('style', 'color: green')
            validEndereco = true
        }

        endereco.addEventListener('blur', () => {
            if (endereco.value == '') {
                labelEndereco.innerHTML = 'Endereço'
                labelEndereco.style.color = 'black'
            }
        });
    })
}

if (senha) {
    senha.addEventListener('keyup', () => {
        if (!isSenhaValid(senha.value)) {
            labelSenha.innerHTML = 'Senha inválida'
            labelSenha.setAttribute('style', 'color: red')
        } else {
            labelSenha.innerHTML = 'Senha válida'
            labelSenha.setAttribute('style', 'color: green')
            validSenha = true
        }

        senha.addEventListener('blur', () => {
            if (senha.value == '') {
                labelSenha.innerHTML = 'Senha'
                labelSenha.style.color = 'black'
            }
        });
    })
}

if (confirmarSenha) {
    confirmarSenha.addEventListener('keyup', () => {
        if (senha.value != confirmarSenha.value) {
            labelConfirmarSenha.innerHTML = 'Senhas diferentes'
            labelConfirmarSenha.setAttribute('style', 'color: red')
        } else {
            labelConfirmarSenha.innerHTML = 'Senhas iguais'
            labelConfirmarSenha.setAttribute('style', 'color: green')
            validConfirmarSenha = true
        }

        confirmarSenha.addEventListener('blur', () => {
            if (confirmarSenha.value == '') {
                labelConfirmarSenha.innerHTML = 'Confirmar senha'
                labelConfirmarSenha.style.color = 'black'
            }
        });
    })
}

if (interesses) {
    interesses.addEventListener('keyup', () => {
        if (interesses.value.length <= 5) {
            labelInteresses.setAttribute('style', 'color: red')
        } else {
            labelInteresses.setAttribute('style', 'color: green')
            validInteresses = true
        }

        interesses.addEventListener('blur', () => {
            if (interesses.value == '') {
                labelInteresses.innerHTML = 'Interesses'
                labelInteresses.style.color = 'black'
            }
        });
    })
}

if (sentimentos) {
    sentimentos.addEventListener('keyup', () => {
        if (sentimentos.value.length <= 5) {
            labelSentimentos.setAttribute('style', 'color: red')
        } else {
            labelSentimentos.setAttribute('style', 'color: green')
            validSentimentos = true
        }

        sentimentos.addEventListener('blur', () => {
            if (sentimentos.value == '') {
                labelSentimentos.innerHTML = 'Sentimentos'
                labelSentimentos.style.color = 'black'
            }
        });
    })
}

if (valores) {
    valores.addEventListener('keyup', () => {
        if (valores.value.length <= 5) {
            labelValores.setAttribute('style', 'color: red')
        } else {
            labelValores.setAttribute('style', 'color: green')
            validValores = true
        }

        valores.addEventListener('blur', () => {
            if (valores.value == '') {
                labelValores.innerHTML = 'Valores'
                labelValores.style.color = 'black'
            }
        });
    })
}