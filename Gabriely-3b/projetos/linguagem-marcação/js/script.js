// criando as variáveis 
const nome = document.getElementById("nome")
const resultado = document.getElementById("resultado")

const cidade = document.getElementById("cidade")
const resultadoCid = document.getElementById("resultadoCid")

function limparCampos() {
    nome.value = ""
    cidade.value = ""
}

// criando função
function mudar(event) {
    event.preventDefault()

    // imprimir nome na tela
    resultado.innerHTML = nome.value
    resultadoCid.innerHTML = cidade.value

    // limpando o campo
    limparCampos();
}