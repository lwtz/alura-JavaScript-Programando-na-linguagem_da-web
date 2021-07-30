let button = document.querySelector('#buscar-pacientes')
button.addEventListener('click', function () {
    console.log('Buscando')
    const url = 'https://api-pacientes.herokuapp.com/pacientes'
    let xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.addEventListener('load', function () {

        if (xhr.status !== 200) {
            console.log('Erro')
            console.log(xhr.responseText)
            console.log(xhr.status)
            alert('Erro ao buscar pacientes')
        } else {
            let resp = xhr.responseText
            let pacientes = JSON.parse(resp)
            console.log(pacientes)

            pacientes.forEach((paciente) => {

                addPatientInTable(paciente)
            })
        }


    })
    xhr.send()

})
