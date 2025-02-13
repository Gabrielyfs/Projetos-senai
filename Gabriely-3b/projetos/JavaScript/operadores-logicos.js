//um programa para dizer se a pessoa pode viajar ou não
let dinheiro = true
let tempo = false

if(dinheiro && tempo) {
    console.log("Pode viajar")
} else {
    console.log("Não pode viajar")
}

//sistema de acesso
let usuarioLogado = true
let usuarioTemPermissao = false

// || significa ou
// Pelo menos um precisa ser verdadeiro
if(usuarioLogado || usuarioTemPermissao) {
    console.log("Acesso pemitido")
} else {
    console.log("Acesso negado")
}