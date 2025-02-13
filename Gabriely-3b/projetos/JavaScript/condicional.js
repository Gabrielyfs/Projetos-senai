let idade = 17;

if (idade >= 18) {
    console.log("Você é maior de idade")
} else {
    console.log("Você não é maior de idade")
}

//Verificando a media de um aluno
let nota = 75

if(nota >= 60) {
    console.log("Aprovado")
} else if (nota > 50) {
    console.log("Recuperação")
} else {
    console.log("Reprovado")
}

//operador ternário
let idade2 = 47
let mensagem = idade2 >= 18 ? "Maior de idade" : "Menor de idade"
console.log(mensagem)