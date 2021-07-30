let campoFiltro = document.querySelector('#filtrar-tabela')

campoFiltro.addEventListener('input', function () {
    let pacientes = document.querySelectorAll('.paciente')
    let i = 0

    if (this.value.length > 0) {
        for (; i < pacientes.length; i++) {
            let paciente = pacientes[i]
            let tdNome = paciente.querySelector('.info-nome')
            let nome = tdNome.textContent

            if (nome !== this.value) {
                paciente.classList.add('invisivel')
            } else {
                paciente.classList.remove('invisivel')
            }
        }
    } else {
        let i = 0
        for (; i < pacientes.length; i++) {
            let paciente = pacientes[i]
            paciente.classList.remove('invisivel')
        }
    }
})


