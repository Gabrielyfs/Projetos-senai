const button = document.querySelector("button");
const inputNota = document.querySelector("#nota");

//criando função para limpar o campo
function clearForm() {
    inputNota.value = "";
}

//criando uma função
button.addEventListener("click", function(event) {
    event.preventDefault();
    const inputNotaValue = inputNota.value;


    //validação do formulário
    if (inputNotaValue === '') {
        alert("Campo obrigatório");
        return false;
    }

    if (inputNotaValue >= 6) {
        alert("Você foi aprovado");
    } else {
        alert("Você foi reprovado");
    }

    //chamando função clear form
    clearForm();

});

