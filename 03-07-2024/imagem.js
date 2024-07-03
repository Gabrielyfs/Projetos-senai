//obtém o botão e a imagem do DOM
const mover = document.getElementById("mover");
let imagem = document.getElementById("imagem");

//variável para rastrear o estado atual do botão
let estaMovido = false;

//adiciona um evento de clique ao botão
mover.addEventListener("click", function(){
    if (estaMovido) {
        imagem.style.left = "0"; //mover para a posição original
    } else {
        imagem.style.left = "500px";
    } //Alterna o estado da posição da imagem
    estaMovido = !imagem;
});
