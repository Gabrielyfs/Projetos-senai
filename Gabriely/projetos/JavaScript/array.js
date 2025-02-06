const frutas = ["Morango", "Maça", "Goiaba", "Pera", "Uva", "Melancia", "Laranja"]
console.log(frutas)

console.log(frutas[2])

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
}

for (let i = 0; i <= 10; i++) {
    console.log(`${i} x 2`, i *2)
}

// 1. MAP - - Transformando cada elemento do array

let numeros = [10, 50, 30, 20, 60]
console.log("Numeros originais", numeros)
let numerosMaisUm = numeros.map(n => n * 3)
console.log("numeros mais um", numerosMaisUm)

// 2. Find - Encontrar o primeiro elemento que corresponde a condição
// Exemplo: encontrar a primeira fruta que começa com M

let primeiroElementoComM = frutas.find(frutas => frutas.startsWith("M"))
console.log(primeiroElementoComM)

// 3. Filter - Cria uma nova lista com os valores que correspondem condição
// Exemplo: Filtrar numeros menor que 50
let numerosMenorQue50 = numeros.filter(n => n < 50)
console.log(numerosMenorQue50)

// 4. includes - Verifica se um elemento existe
// Exemplo: verifica se uva existe no array de frutas

let temUva = frutas.includes("Uva")
console.log(temUva)

let temLaranja = frutas.includes("Laranja")
console.log(temLaranja)

// 5. Some - verificar se pelo um elemnto existe no array
// Exemplo: verifica se existe pelo menos um numero maior que 50

let numeroMaiorQue50 = numeros.some(n => n > 50)
console.log(numeroMaiorQue50)

// 6. Every -  verificar se todos os elementos atendem a condição

let todosOsNumeros10 = numeros.every(n => n == 10)
console.log(todosOsNumeros10)
