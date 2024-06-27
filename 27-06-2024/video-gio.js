//adicionar nomes
const nomes = ["Ana Julia", "Gabriely", "Ryu"];
nomes.unshift("Bia");//adicionar no começo
nomes.push("Bia");//adicionar no final
console.log(nomes);

//for loop
console.log("");
for (let i = 5; i <= 10; i++) {
    console.log(i); 
}

//filtrar
console.log("");
const numbers = [30, 99, 35, 69];
const result = numbers.filter((item) => {return item > 35});
console.log(result);

//forma alternativa
console.log("");
const number = [30, 99, 35, 69];
const resul = numbers.filter(item => item > 35);
console.log(result);

//map; copiar cada item
const num = [1, 2, 3];
const result1 = num.map(item => item * 2);

console.table(result1);