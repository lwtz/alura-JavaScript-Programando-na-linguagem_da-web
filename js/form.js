let btnAdd = document.querySelector('#adicionar-paciente')
btnAdd.addEventListener('click', (event) => {
    event.preventDefault()

    let form = document.querySelector('#form-add')
    let patient = gePatientForm(form)
    console.log(patient)

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
    imcTD.textContent = calcIMC(form.peso.value, form.altura.value)

    pacienteTR.appendChild(nomeTD)
    pacienteTR.appendChild(pesoTD)
    pacienteTR.appendChild(alturaTD)
    pacienteTR.appendChild(gorduraTD)
    pacienteTR.appendChild(imcTD)

    // console.log(pacienteTR)
    let tabela = document.querySelector('#tabela-pacientes')
    tabela.appendChild(pacienteTR)


})

function gePatientForm(form) {
    let patient;
    return patient = {
        name: form.nome.value,
        weight: form.peso.value,
        height: form.altura.value,
        fat: form.gordura.value,
        imc: calcIMC(form.peso.value, form.altura.value)

    }

}
