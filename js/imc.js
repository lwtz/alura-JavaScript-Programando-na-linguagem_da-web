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
        // console.log('Peso Válido')
    } else {
        // console.log('Peso Inválido')
        pesoValido = false
        tdImc.textContent = "Peso Inválido"
        paciente.classList.add('invalid-result')
    }

    !(altura <= 0 || altura > 5.00) ? console.log('Altura Válida') : alturaValida = false

    if (pesoValido && alturaValida) {
        tdImc.textContent = calcIMC(peso, altura)
    }
}


// Events JS

let title = document.querySelector('.titulo')
title.textContent = 'William é o melhor'
title.addEventListener('click', () => {
    console.log('Anon function')
})
// title.addEventListener('click', function (){
//     console.log('Isso é uma funcao anonima')
// })

// function msg() {
//     console.log('Eae')
// }

function calcIMC(weight, height) {
    let imc = weight / (height * 2)
    return imc.toFixed(2)
}

