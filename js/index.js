let pacientes = document.querySelectorAll('.paciente')
let i = 0
for (; i < pacientes.length; i++) {
    let paciente = pacientes[i]
    let peso = paciente.querySelector('.info-peso').textContent
    let altura = paciente.querySelector('.info-altura').textContent

    let tdImc = paciente.querySelector('.info-imc')

    let pesoValido = true
    let alturaValida = true

    if (!(peso <= 0 || peso >= 500)) {
        console.log('Peso Válido')
    } else {
        console.log('Peso Inválido')
        pesoValido = false
        tdImc.textContent = "Peso Inválido"
    }

    !(altura <= 0 || altura > 5.00) ? console.log('Altura Válida') : alturaValida = false

    if (pesoValido && alturaValida) {
        let imc = peso / (altura * 2)
        tdImc.textContent = imc.toFixed(2)
    }
}
