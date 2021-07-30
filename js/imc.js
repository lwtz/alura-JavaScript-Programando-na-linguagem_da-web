let pacientes = document.querySelectorAll('.paciente')
let i = 0
for (; i < pacientes.length; i++) {
    let paciente = pacientes[i]
    let peso = paciente.querySelector('.info-peso').textContent
    let altura = paciente.querySelector('.info-altura').textContent

    let tdImc = paciente.querySelector('.info-imc')

    let pesoValido = validaPeso(peso)
    let alturaValida = validaAltura(altura)

    if (!pesoValido) {
        pesoValido = false
        tdImc.textContent = "Peso Inválido"
        paciente.classList.add('invalid-result')
    }

    if (!alturaValida) {
        alturaValida = false
        tdImc.textContent = "Altura Inválido"
        paciente.classList.add('invalid-result')
    }

    // !(altura <= 0 || altura > 5.00) ? console.log('Altura Válida') : alturaValida = false

    if (pesoValido && alturaValida) {
        tdImc.textContent = calcIMC(peso, altura)
    }
}


function calcIMC(weight, height) {
    let imc = weight / (height * 2)
    return imc.toFixed(2)
}

function validaPeso(peso) {
    if (peso >= 0 && peso <= 1000) {
        return true
    }
}

function validaAltura(altura) {
    if (altura >= 0 && altura <= 3.00) {
        return true
    }
}
