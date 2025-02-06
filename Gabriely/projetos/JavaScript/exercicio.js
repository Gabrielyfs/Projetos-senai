// 1
let numeros = [1, 2, 3 , 4, 5]
let numerosDobro = numeros.map(n => n * 2)
console.log(numerosDobro)

// 2
let numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let numeroMaiorQue5 = numero.filter(n => n > 5)
console.log(numeroMaiorQue5)

// 3 
let numeross = [10, 25, 47, 58, 62, 79]
let primeiroMaiorNumero50 = numeross.find(n => n > 50)
console.log(primeiroMaiorNumero50)

//4
let numerosss = [10, -5, 7, 0, -3]
let numeroNegativo = numerosss.some(n => n < 0)
console.log(numeroNegativo)

//5
let maiorQue2 = numeros.every(n => n > 2)
console.log(maiorQue2)

//6 
let numer = [1, 3, 5, 7, 9, 10]
let tem7 = numer.includes(7)
console.log(tem7)