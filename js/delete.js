const allPacientes = document.querySelectorAll(".paciente")
const tabela = document.querySelector("table")

tabela.addEventListener('dblclick', function (event) {
    console.log(event.target)
    event.target.parentNode.classList.add('fadeOut')
    setTimeout(() => {
        event.target.parentNode.remove()
    }, 1001)
})
