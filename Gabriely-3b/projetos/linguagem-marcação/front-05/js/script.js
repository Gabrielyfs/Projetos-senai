// obtem os elementos do DOM
const valor1 = document.getElementById("valor1")
const valor2 = document.getElementById("valor2")

// variavel resultado
const resultado = document.getElementById("resultado")

// limpar os campos
function limpar() {
    valor1.value = ''
    valor2.value = ''
}

// função de tempo
function tempo() {
    setTimeout(function () {
        resultado.innerHTML = "Gabriely"
        
    }, 2000)

}

// criando função
function somar(event) {
    event.preventDefault()
    let resultadoSoma = Number(valor1.value) + Number(valor2.value)

    resultado.innerHTML = resultadoSoma

    limpar()
    // tempo()
}

function sub(event) {
    event.preventDefault()
    let resultadoSub = Number(valor1.value) - Number(valor2.value)

    resultado.innerHTML = resultadoSub

    limpar()
    // tempo()
}

function mult(event) {
    event.preventDefault()
    let resultadoMult = Number(valor1.value) * Number(valor2.value)

    resultado.innerHTML = resultadoMult

    limpar()
    // tempo()
}

function div(event) {
    event.preventDefault()
    let resultadoDiv = Number(valor1.value) / Number(valor2.value)

    resultado.innerHTML = resultadoDiv

    limpar()
    // tempo()
}