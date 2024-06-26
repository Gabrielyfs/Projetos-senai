let txt = "Estão chegando as provas";

 //a contagem começa do 0
console.log("texto base: " + txt);
console.log(txt.length); //quantidade de caracteres
console.log(txt.indexOf("as")); //retorna a primeia posição
console.log(txt.lastIndexOf("as")); //retorna a ultima posição
console.log(txt.slice(0, 5)); //pegar um pedaço - prim num = primeira letra; seg num = letra definida
console.log(txt.replace("provas", "férias")); //substituir
console.log(txt.toUpperCase()); //deixar em maiúsculo
console.log(txt.toLowerCase()); //deixar em minúsculo
