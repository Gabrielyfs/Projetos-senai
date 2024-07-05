//obtém os valores dos campos de entrada
let form = document.querySelector("#cadastroForm");
let cadastroList = document.querySelector("#cadastroList");
let nome = document.querySelector("#nome");
let email = document.querySelector("#email");
let cidade = document.querySelector("#cidade")

form.addEventListener("submit", function(event){
    event.preventDefault();

    let listItem = document.createElement("li")
    listItem.textContent = `<strong>Nome:</strong> ${nome.value} <br><strong>Email:</strong> ${email.value}<br><strong>Cidade:</strong> ${cidade.value}`

    //adiciona no item na lista
    cadastroList.appendChild(listItem)

    //limpa o input
    form.reset();
})