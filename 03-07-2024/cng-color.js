//document.body.style.background = "red";

let mudar = document.getElementById("mudar");
let voltar = document.getElementById("voltar");
let cor = document.getElementById("cor");

mudar.addEventListener("click", function() {
    document.body.style.background = "#8B0032";
});

voltar.addEventListener("click", function() {
    document.body.style.background = "";
});

if (cor == "click") {
    document.body.style.background = "#8B0032";
} else {
    document.body.style.background = "";
}