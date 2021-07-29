let paciente = document.querySelector("#first-paciente")
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
    tdImc.textContent ="Peso Inválido"
}

!(altura <= 0 || altura > 5.00) ? console.log('Altura Válida') : alturaValida = false

if (pesoValido && alturaValida) {
    tdImc.textContent = peso / (altura * 2)

}



