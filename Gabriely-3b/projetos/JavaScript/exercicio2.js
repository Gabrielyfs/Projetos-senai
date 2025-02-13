let idade = 94
let ano = 2025 - idade

if (ano <= 1964) {
    console.log("Baby boomer")
} else if (ano <= 1980) {
    console.log("Geração X")
} else if (ano <= 1996) {
    console.log("Millenial")
} else if (ano <= 2010) {
    console.log("Geração Z")
} else if (ano <= 2024) {
    console.log("Geração Alpha")
} else {
    console.log("Geração Beta")
}

console.log(ano)

// calcular IMC
let peso = 50
let altura = 1.55
let imc = peso / (altura * altura)

if(imc < 18.5) {
    console.log("Abaixo do peso")
} else if(imc > 18.5) {
    console.log("Peso normal")
} else if(imc > 25) {
    console.log("Sobrepeso")
} else {
    console.log("Obesidade")
}

//desconto
let idades = 80
let valorDaCompra = 600

if (idades > 60) {
    console.log(valorDaCompra - (valorDaCompra * 0.2))
} else if( idades < 18) {
    console.log(valorDaCompra - (valorDaCompra * 0.1))
} else if (valorDaCompra > 500 && idades > 60) {
    console.log(valorDaCompra - (valorDaCompra * 0.35))
} else if (valorDaCompra > 500) {
    console.log(valorDaCompra - (valorDaCompra * 0.15))
} else {
    console.log(valorDaCompra - (valorDaCompra * 0.05))
}