let teste = 4;

switch (teste) {
    case 1:
        console.log("Foi de 1ª vez");
        break;
    case 2:
        console.log("Foi de 2ª vez");
        break;
    default:
        console.log("Não foi nem na primeira e nem na segunda");
        break;
}
console.log("");

//exercicio
let bebida = "cha";
switch (bebida) {
    case "água":
        console.log("Substância química cujas moléculas são formadas por dois átomos de hidrogênio e um de oxigênio.");
        break;
    case "refrigerante":
        console.log("Bebida não alcoólica e não fermentada, fabricada industrialmente, à base de água mineral e açucar.");
        break;
    case "suco":
        console.log("Bebida produzida do líquido extraído de frutos.");
        break;
    default:
        console.log("Bebida desconhecida");
}