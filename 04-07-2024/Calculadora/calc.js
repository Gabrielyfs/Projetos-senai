//obtém os elementos do DOM
let valor1 = document.getElementById("valor1");
let valor2 = document.getElementById("valor2");

//botões
const bntSomar = document.getElementById("bntSomar");
const bntSubtrair = document.getElementById("subtrair");
const bntMulti = document.getElementById("multiplicar")
const bntDivi = document.getElementById("dividir")

//botao resultado
const resultado = document.getElementById("resultado");

//adiciona um evento de click no botão
bntSomar.addEventListener("click", function() {
    let soma = Number(valor1.value) + Number(valor2.value);
//Exibe o resultado na tela
    resultado.textContent = soma;

    valor1.value = "";
    valor2.value = "";

    setTimeout(function() {
        resultado.textContent = 0;
    }, 2000)
})

bntSubtrair.addEventListener("click", function() {
    let sub = Number(valor1.value) - Number(valor2.value);
    resultado.textContent = sub;

    valor1.value = "";
    valor2.value = "";

    setTimeout(function() {
        resultado.textContent = 0;
    }, 2000)
})

bntMulti.addEventListener("click", function() {
    let multi = Number(valor1.value) * Number(valor2.value);
    resultado.textContent = multi;

    valor1.value = "";
    valor2.value = "";

    setTimeout(function() {
        resultado.textContent = 0;
    }, 2000)
})

bntDivi.addEventListener("click", function() {
    let divi = Number(valor1.value) / Number(valor2.value);
    resultado.textContent = divi;

    valor1.value = "";
    valor2.value = "";

    setTimeout(function() {
        resultado.textContent = 0;
    }, 2000)
})