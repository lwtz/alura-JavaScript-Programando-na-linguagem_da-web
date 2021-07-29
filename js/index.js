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
        let imc = peso / (altura * 2)
        tdImc.textContent = imc.toFixed(2)
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

let btnAdd = document.querySelector('#adicionar-paciente')
btnAdd.addEventListener('click', (event) => {
    event.preventDefault()

    let form = document.querySelector('#form-add')

    // let nome = form.nome.value
    // let peso = form.peso.value
    // let gordura = form.gordura.value
    // let altura = form.altura.value
    // console.log([nome, peso, gordura, altura])
    // console.log({nome, peso, gordura, altura})

    let pacienteTR = document.createElement('tr')

    let pesoTD = document.createElement('td')
    let alturaTD = document.createElement('td')
    let nomeTD = document.createElement('td')
    let gorduraTD = document.createElement('td')
    let imcTD = document.createElement('td')

    nomeTD.textContent = form.nome.value
    pesoTD.textContent = form.peso.value
    alturaTD.textContent = form.altura.value
    gorduraTD.textContent = form.gordura.value

    pacienteTR.appendChild(nomeTD)
    pacienteTR.appendChild(pesoTD)
    pacienteTR.appendChild(alturaTD)
    pacienteTR.appendChild(gorduraTD)

    console.log(pacienteTR)
    let tabela = document.querySelector('#tabela-pacientes')
    tabela.appendChild(pacienteTR)


})
