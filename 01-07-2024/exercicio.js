//for loop para soma
const array = [[4, 32, 8], [64, 8, 32], [8, 32, 16], [2, 8, 4]];
let numArrays = 0;

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
        numArrays += array[i][j];
}
}
console.log(`Resultado ${numArrays}`)
console.log("");

//template html <li>
const names = ["João Grilo", "Chicó", "Rosinha"];
let templatesNames = '';

for (let g = 0; g < names.length; g++) {
    templatesNames += `<li>${names[g]}</li>`;
}
console.log(templatesNames);
console.log("");

//console.log(typeof Number(number)); transformar o tipo em numero
//exercicio; some todos os numeros

const numbers = ['91', '5', '30', '97', '83', '31'];
let va = 0;

for (let a = 0; a < numbers.length; a++) {
        va += Number(numbers[a]);
    }
console.log(va);
console.log(va === 337);