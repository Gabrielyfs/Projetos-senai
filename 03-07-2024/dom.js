//obtendo o elemento do DOM
let nome = document.getElementById("nome");
let cid = document.getElementById("cidade");

function mudar(event) {
    //previne o comportamento padrão do evento
    event.preventDefault();
    document.getElementById("titulo").innerHTML = nome.value;
    nome.value = '';

    document.getElementById("titulo2").innerHTML = cid.value;
    cid.value = ''; 
}