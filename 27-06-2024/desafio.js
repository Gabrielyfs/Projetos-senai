let hora = 5;
const bomDia = hora >= 6 && hora < 12;
const boaTarde = hora >= 12 && hora < 18;
const boaNoite = hora >= 18 && hora < 1;

if (bomDia) {
    console.log("Bom dia!");
} else if (boaTarde) {
    console.log("Boa tarde!");
} else if (boaNoite) {
    console.log("Boa noite");
} else {
    console.log("Boa madrugada");
}

//Desafio 2
let idade = 7;
const gratis = idade <= 7 || idade >= 65

if(gratis) {
    console.log("Pra você, a entrada é grátis!")
} else {
    console.log("A entrada é R$ 30,00");
}

//desafio 3
const crazyArray = [true, 869, "oi", 71, false, 83, "35", true, 397, "js", false];

for (let crazyArray = 5; i <= 10; i++) {
    console.log("O crazu array tem ${} booleans, ${} números e ${} strings."); 
}