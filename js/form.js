let btnAdd = document.querySelector('#adicionar-paciente')

btnAdd.addEventListener('click', (event) => {
    event.preventDefault()
    let form = document.querySelector('#form-add')
    let patient = getPatientForm(form)
    let pacienteTR = buildTR(patient)

    let erros = validaPaciente(patient);
    // console.log(erros)

    if (erros.length > 0) {
        exibeMensagensDeErro(erros)
        return
    }


    let tabela = document.querySelector('#tabela-pacientes')
    tabela.appendChild(pacienteTR)
    form.reset()
    let msgErro = document.querySelector('#mensagens-erro')
    msgErro.innerHTML = ''
})


function exibeMensagensDeErro(erros) {
    let ul = document.querySelector("#mensagens-erro")
    ul.innerHTML = ""
    erros.forEach((erro) => {
        let li = document.createElement("li")
        li.textContent = erro
        ul.appendChild(li)
    })
}

function getPatientForm(form) {
    let paciente;
    return paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcIMC(form.peso.value, form.altura.value)
    }
}

function buildTR(paciente) {
    let pacienteTR = document.createElement('tr')
    pacienteTR.classList.add('paciente')
    pacienteTR.appendChild(buildTD(paciente.nome, 'info-nome'))
    pacienteTR.appendChild(buildTD(paciente.peso, 'info-peso'))
    pacienteTR.appendChild(buildTD(paciente.altura, 'info-altura'))
    pacienteTR.appendChild(buildTD(paciente.gordura, 'info-gordura'))
    pacienteTR.appendChild(buildTD(paciente.imc, 'info-imc'))
    return pacienteTR
}

function buildTD(dado, classe) {
    let td = document.createElement('td')
    td.textContent = dado
    td.classList.add(classe)
    return td
}


function validaPaciente(paciente) {
    let erros = []

    if (paciente.nome.length === 0)
        erros.push('Nome errado')

    if (paciente.gordura.length === 0)
        erros.push('Gordura inválida')

    if (!validaPeso(paciente.peso))
        erros.push("Peso é inválido")

    if (!validaAltura(paciente.altura))
        erros.push('Altura Inválido')

    return erros
}



